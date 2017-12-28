import { AuthPatientService } from './service/auth-patient.service';
import { AuthAdminService } from './service/auth-admin.service';
import { Acct2Module } from './acct2/acct2.module';
import { Acct1Module } from './acct1/acct1.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AuthGuardService } from './service/auth-guard.service';
import { AuthenticationService } from './service/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    Acct1Module,
    Acct2Module
  ],
  providers: [
    AuthGuardService,
    AuthenticationService,
    AuthAdminService,
    AuthPatientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
