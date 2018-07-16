import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-board',
  templateUrl: './board.html',
  styleUrls: []
})
export class BoardComponent {
    token;
    constructor(private router:Router,private http:HttpClient){

    }
    boardsub(form){
        this.token=localStorage.getItem('token')

        this.http.post('/user/postboard',{
            name:form.name,
            swimlane:form.swimlane,
            token:this.token
        }).subscribe((res:any)=>{
            if(res.success){
                console.log('Board Created')
                this.router.navigate(['/dashboard']);
            }
        })
    }  
}
