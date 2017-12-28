import { AuthPatientService } from './../service/auth-patient.service';
import { AuthGuardService } from './../service/auth-guard.service';
import { Acct2Component } from './acct2/acct2.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'acct2',
    component: Acct2Component,
    canActivate: [AuthGuardService, AuthPatientService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Acct2RoutingModule { }
