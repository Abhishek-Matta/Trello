import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-allboard',
  template: `<br><br><br><div *ngIf="checklen ;else nodata">
  <div class="row">
  <div *ngFor="let el of data" (click)="viewblog(el._id)" class="col-lg-4 col-md-6 col-sm-6 col-xs-6">
        <div class="card">
          <h3 class="card-header text-center text-white bg-primary">{{el.name}}</h3>
          <div class="card-body">
          <b>Click Here to see Board</b>
          </div>
        </div>
        <br>
    </div>
  </div>
  </div>
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
    viewblog(bid){
        this.router.navigate(['/dashboard','user',bid])
    }

}

