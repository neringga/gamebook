import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestComponent } from './GameBook/Request/request.component';
import { NavBarComponent } from './GameBook/NavBar/nav-bar.component';
import { LoginComponent } from './GameBook/Login/login.component';
import { LoginDataComponent } from './GameBook/Login/Login-data/login-data.component';
import { AddTrendsComponent } from './GameBook/AddTrends/add-trends.component';

import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    RequestComponent,
    NavBarComponent,
    LoginComponent,
    LoginDataComponent,
    AddTrendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
