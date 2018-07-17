import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-board',
  templateUrl: './board.html',
  styleUrls: []
})
export class BoardComponent {
    data;
    constructor(private router:Router,private http:HttpClient,private activeRoute: ActivatedRoute){
        this.http.get('/user/getone/'+this.activeRoute.snapshot.params['id']).subscribe((res:any)=>{
            if(res.success){
                this.data=res.boards;        
            }
        })
    }
}
