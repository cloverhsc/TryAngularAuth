import { Observable } from 'rxjs/Rx';
import { AuthenticationService } from './authentication.service';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  canActivate(): Observable<boolean> {
    const ident = JSON.parse(String(localStorage.getItem('test')));
    if (ident.token) {
      return Observable.of(true);
    } else {
      return Observable.of(false);
    }
  }

}
