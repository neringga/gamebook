import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './GameBook/Login/login.component';
import { AddTrendsComponent } from './GameBook/AddTrends/add-trends.component';
import { RequestComponent } from './GameBook/Request/request.component';

const routes: Routes = [ 
  {
    path: 'request',
    component: RequestComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'add-trends',
    component: AddTrendsComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
