import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthenticationService {

  private resp = {
    token: '',
    types: ''
  };
  constructor() { }

  login(acc: string, pwd: string) {
    let obj = {
      token: '',
      types: ''
    };
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
        obj = {
          token: 'revolc',
          types: 'admin'
        };
      } else if ( acc === 'hsc@example.com' && pwd === 'hscc') {
        obj = {
          token: 'ccsh',
          types: 'patient'
        };
      }
      return obj;
  }
}
