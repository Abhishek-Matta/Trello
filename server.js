const express=require('express');
const mongoose=require('mongoose');
const path=require('path');
var bodyParser=require('body-parser');
var app=express();
var userroute=require('./routes/user.js')
mongoose.connect('mongodb://trello667788:password123@ds131711.mlab.com:31711/trello');

var db=mongoose.connection;

db.on('error',console.error.bind(console,'connection error:'));

db.once('open',function(){
    console.log('Connected to MongoDB');
});

app.use(express.static(path.join(__dirname,'dist/newapp2')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.use('/user',userroute)

// app.use(function(req,res){
//     res.sendFile(__dirname,'dist/newapp2/index.html')
// });

app.get('*',function(req,res){
    res.sendFile('index.html', { root:path.join(__dirname, 'dist/newapp2')})
});

app.listen(5000,function(){
console.log("Listening on port 5000..")
});