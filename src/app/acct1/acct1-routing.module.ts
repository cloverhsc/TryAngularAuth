import { AuthAdminService } from './../service/auth-admin.service';
import { AuthGuardService } from './../service/auth-guard.service';
import { Acct1Component } from './acct1/acct1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'acct1',
    component: Acct1Component,
    canActivate: [AuthGuardService, AuthAdminService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Acct1RoutingModule { }
