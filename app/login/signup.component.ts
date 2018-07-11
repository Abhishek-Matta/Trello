import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  template: `<app-headercomp></app-headercomp><br><br><h1>This is the signup component</h1>

  <form #signupform="ngForm" (ngSubmit)="signupsub(signupform.value)">
      <input type="text" name="username" #username="ngModel" ngModel required minlength="5" placeholder="username">
      <br><br>
      <input type="text" name="password" ngModel required placeholder="password">
      <br><br>
      <input type="text" name="email" ngModel required placeholder="email">
      <br><br>
      <input type="text" name="address" ngModel required placeholder="address">
      <br><br>
      <input type="text" name="fullname" ngModel required placeholder="fullname">
      <br><br>
      <div *ngIf="username.errors">
          <small *ngIf="username.errors.required && username.touched">username is required</small>
          <small *ngIf="username.errors.minlength && username.dirty">
              {{username.errors.minlength.requiredLength-username.errors.minlength.actualLength}} more characters
          </small>
      </div>
  <button type="submit" [disabled]="signupform.invalid">Submit</button>
  </form>`
})
export class SignupComponent {

    constructor(private http:HttpClient){  
    }

    signupsub(form){
        this.http.post('/user',{
            fullname:form.fullname,
            email:form.email,
            password:form.password,
            address:form.address,
            username:form.username
        }).subscribe((res:any)=>{
            console.log('called')
            console.log(res.message)
        })
    }
}