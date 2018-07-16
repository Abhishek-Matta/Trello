import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { Guard } from './services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
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
      canActivate:[Guard],
      loadChildren:'./dashboard/dashboard.module#DashboardModule'
    },{
      path:'board',
      loadChildren:'./board/board.module#BoardModule'
    }])
  ],
  providers: [Guard],
  bootstrap: [AppComponent]
})
export class AppModule { }
