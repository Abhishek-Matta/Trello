var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var User = require('../models/user');
var Board=require('../models/board');

router.post('/', function (req, res) {
    var user = new User({
        fullName: req.body.fullname,
       username: req.body.username,
       address: req.body.address,
        password: bcrypt.hashSync(req.body.password, 10),
        email: req.body.email
    });
    user.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                message: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'User created',
            obj: result
        });
    });
});

router.post('/signin', function(req, res, next) {
    User.findOne({email: req.body.email}, function(err, user) {
        if (err) {
            return res.status(500).json({
                message: 'An error occurred',
                success:false,
                error: err
            });
        }
        if (!user) {
            return res.status(401).json({
                success:false,
                title: 'Login failed',
                error: {message: 'Invalid login credentials'}
            });
        }
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({
                title: 'Login failed',
                success:false,
                error: {message: 'Invalid login credentials'}
            });
        }
        var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
        res.status(200).json({
            message: 'Successfully logged in',
            token: token,
            success:true,
            userId: user._id
        });
    });
});

router.post('/postboard', function (req, res) {
    var decode=jwt.verify(req.body.token,'secret');

    var board = new Board({
        name: req.body.name,
       userid: decode.user._id
    });
    board.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                message: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            success:true,
            message: 'Board created',
            obj: result
        });
    });
});

router.get('/getboards/:id', function (req, res) {
    Board.find({userid:req.params.id}).exec((err,data)=>{
        if(err){
            return res.status(500).json({
                message: 'An error occurred',
                error: err
            });
        }
        else{
            res.status(201).json({
                success:true,
                message: 'All boards',
                boards: data
            }); 
        }
    })
});

router.get('/getone/:id', function (req, res) {
    Board.find({_id:req.params.id}).exec((err,data)=>{
        if(err){
            return res.status(500).json({
                message: 'An error occurred',
                error: err
            });
        }
        else{
            res.status(201).json({
                success:true,
                message: 'All boards',
                boards: data
            }); 
        }
    })
});
module.exports = router;
