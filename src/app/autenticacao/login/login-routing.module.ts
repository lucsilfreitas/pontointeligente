import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent, LogarComponent } from './components';

export const LoginRoutes: Routes = [
  { path: 'login', 
    component: LogarComponents,
    children: [{ path: '', component: LoginComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(LoginRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

