import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-board',
  template: `<div *ngIf="checklen ;else nodata"><p *ngFor="let el of data">{{el.name}} <br> {{el.swimlane}}</p></div>
  <ng-template #nodata><p>You have no boards</p></ng-template>`
})
export class AllBoardsComponent {
    data;
    checklen=true;
    constructor(private router:Router,private http:HttpClient){
        this.http.get('/user/getboards/'+localStorage.getItem('userid')).subscribe((res:any)=>{
            if(res.success){
                this.data=res.boards;
                if(this.data.length==0){
                    this.checklen=false
                }
            }
        })
    }

}

