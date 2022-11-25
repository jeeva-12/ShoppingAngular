import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SaladComponent } from './salad/salad.component';
import { IndianComponent } from './indian/indian.component';
import { ItalianComponent } from './italian/italian.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
