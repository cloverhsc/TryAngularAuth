import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Acct1RoutingModule } from './acct1/acct1-routing.module';
import { Acct2RoutingModule } from './acct2/acct2-routing.module';
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
    Acct1RoutingModule,
    Acct2RoutingModule
  ],
  providers: [
    AuthGuardService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
