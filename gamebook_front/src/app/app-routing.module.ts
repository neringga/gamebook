import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './GameBook/Login/login.component';
import { AddTrendsComponent } from './GameBook/AddTrends/add-trends.component';
import { RequestComponent } from './GameBook/Request/request.component';
import { NavBarComponent } from './GameBook/NavBar/nav-bar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    component: NavBarComponent,
    children:
    [
      {
        path: 'add-trends',
        component: AddTrendsComponent
      },
      {
        path: 'request',
        component: RequestComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
