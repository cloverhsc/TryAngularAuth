import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Acct1RoutingModule } from './acct1-routing.module';
import { Acct1Component } from './acct1/acct1.component';

@NgModule({
  imports: [
    CommonModule,
    Acct1RoutingModule
  ],
  declarations: [Acct1Component]
})
export class Acct1Module { }
