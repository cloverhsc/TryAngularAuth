import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Acct2RoutingModule } from './acct2-routing.module';
import { Acct2Component } from './acct2/acct2.component';

@NgModule({
  imports: [
    CommonModule,
    Acct2RoutingModule
  ],
  declarations: [Acct2Component]
})
export class Acct2Module { }
