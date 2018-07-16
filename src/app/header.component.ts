import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-headercomp',
  template: 
//   `<nav class="navbar navbar-inverse">
//   <div class="container-fluid">
//     <div class="navbar-header">
//       <a class="navbar-brand" href="#">WebSiteName</a>
//     </div>
//     <ul class="nav navbar-nav">
//       <li class="active"><a href="#">Home</a></li>
//       <li><a href="#">Page 1</a></li>
//       <li><a href="#">Page 2</a></li>
//       <li *ngIf="isloggedin()"><a href="" (click)="logout()">logout</a></li>
//       <li *ngIf="!isloggedin()"><a href="#" routerLink="/login">login</a></li>
//     </ul>
//   </div>
// </nav>
// `
//   UPDATION ============================================== UPDATION
 `
  <style>
.navbar-brand{
display:inline-block;
float:left;
margin-right:.75em;
height:3em;


}

@media(max-width:700px){
.navbar-brand{
height:2em;


}
.btn{
margin-top:.5rem;

}



}

</style>
<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#"
  >
  <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/trello-header-logos/af7af6ed478d3460709d715d9b3f74a4/trello-logo-white.svg" class="img-fluid" style="height:100%;">
  
  
  
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#"><i class="fa fa-home"></i> Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Page-1</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Page-2</a>
      </li>
      <li class="nav-item" *ngIf="isloggedin()">
        <a class="nav-link" href="#" routerLink="/board/allboards">See your board</a>
      </li>
       </ul>
  <div id="wrap">
  <button  *ngIf="!isloggedin()" class="btn btn-danger text-white " routerLink="/login"><i class="fas fa-sign-in-alt"></i> Log In</button>
  <button  *ngIf="isloggedin()"  class="btn btn-warning ml-3 text-white" (click)="logout()"><i class="fas fa-user-plus"></i> Logout</button>
    <button class="btn btn-warning ml-3 text-white" routerLink="/login/signup"><i class="fas fa-user-plus"></i>  Sign Up</button>
    </div>
  </div>
</nav>
  `

})
export class HeaderComponent {
  constructor(private router:Router){
  }
  logout(){
      localStorage.clear();
      this.router.navigate(['/']);

  }
  isloggedin(){
    return localStorage.getItem('token')!==null;
    }
 }

  

