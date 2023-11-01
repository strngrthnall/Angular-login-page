import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignPageComponent } from './sign-page/sign-page.component';
import { LoginComponent } from './sign-page/login/login.component';
import { SigninComponent } from './sign-page/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    SignPageComponent,
    LoginComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
