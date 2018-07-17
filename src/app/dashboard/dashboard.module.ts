
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { AllBoardsComponent } from '../board/allboards.component';
import { BoardComponent } from '../board/board.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    AllBoardsComponent,
    BoardComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([{
        path:'',
        component:DashboardComponent
    },{
      path:'/board/allboards',
      component:AllBoardsComponent
    },{
      path:'/board/user/:id',
      component:BoardComponent
    }])
  ],
  providers:[]
})
export class DashboardModule { }