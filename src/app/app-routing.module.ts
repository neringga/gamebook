import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './GameBook/Login/login.component';
import { AddTrendsComponent } from './GameBook/AddTrends/add-trends.component';

const routes: Routes = [ 
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
