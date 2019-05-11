import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestComponent } from './GameBook/Request/request.component';
import { NavBarComponent } from './GameBook/NavBar/nav-bar.component';
import { LoginComponent } from './GameBook/Login/login.component';
import { LoginDataComponent } from './GameBook/Login/Login-data/login-data.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestComponent,
    NavBarComponent,
    LoginComponent,
    LoginDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
