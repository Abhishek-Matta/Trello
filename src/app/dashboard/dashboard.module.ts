
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { AllBoardsComponent } from '../board/allboards.component';
import { BoardComponent } from '../board/board.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    DashboardComponent,
    AllBoardsComponent,
    BoardComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild([{
      path:'',
      component:DashboardComponent
    },{
      path:'board/allboards',
      component:AllBoardsComponent
    },{
      path:'user/:id',
      component:BoardComponent
    }])
  ],
  providers:[]
})
export class DashboardModule { }