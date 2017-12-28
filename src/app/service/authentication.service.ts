import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  private resp = new Resp();
  constructor() { }

  login(acc: string, pwd: string): Observable<Resp> {
    // if ( acc === 'clover@example.com' && pwd === 'clover') {
    //   obj = {
    //     token: 'revolc',
    //     types: 'admin'
    //   };
    //   return obj;
    // } else if ( acc === 'hsc@example.com' && pwd === 'hscc') {
    //   obj = {
    //     token: 'ccsh',
    //     types: 'patient'
    //   };
    //   return obj;
    // } else {
    //   return obj;
    // }

    if ( acc === 'clover@example.com' && pwd === 'clover') {
      this.resp.token = 'revolc';
      this.resp.types = 'admin';
      this.resp.result = 'success';
    } else if ( acc === 'hsc@example.com' && pwd === 'hscc') {
      this.resp.token = 'ccsh';
      this.resp.types = 'patient';
      this.resp.result = 'success';
    }
    return Observable.of(this.resp).delay(2000);
  }
}

export class Resp {
  token: string;
  types: string;
  result: string;
  constructor() {
    this.token = '';
    this.types = '';
    this.result = 'failed';
  }
}
