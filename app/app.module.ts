import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{
      path:'',
      redirectTo:'login',
      pathMatch:'full'
    },{
      path:'login',
      loadChildren:'./login/login.module#LoginModule'
    },{
      path:'dashboard',
      loadChildren:'./dashboard/dashboard.module#DashboardModule'
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
