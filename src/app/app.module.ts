import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SaladComponent } from './salad/salad.component';
import { IndianComponent } from './indian/indian.component';
import { ItalianComponent } from './italian/italian.component';
import { RouterModule, Routes } from '@angular/router';

const myRoute:Routes=[
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"indian",
    component:IndianComponent
  },
  {
    path:"italian",
    component:ItalianComponent
  },
  {
    path:"salad",
    component:SaladComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SaladComponent,
    IndianComponent,
    ItalianComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
