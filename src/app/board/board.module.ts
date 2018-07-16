import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {BoardComponent} from './board.component'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AllBoardsComponent } from './allboards.component';

@NgModule({
  declarations: [
    BoardComponent,
    AllBoardsComponent
  ],
  imports: [CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild([{
        path:'',
        component:BoardComponent
    },{
      path:'allboards',
        component:AllBoardsComponent
    }])
  ],
  providers:[]
})
export class BoardModule { }