import { Component } from '@angular/core';

@Component({
  selector: 'app-headercomp',
  template: `<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li *ngIf="isloggedin()"><a href="" (click)="logout()">logout</a></li>
      <li *ngIf="!isloggedin()"><a href="#" routerLink="/login">login</a></li>
    </ul>
  </div>
</nav>
`

})
export class HeaderComponent {
  constructor(){
  }

  logout(){
      localStorage.clear();
  }
  isloggedin(){
      return localStorage.getItem('token')!==null;
  }
}
