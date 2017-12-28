import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './authentication.service';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthAdminService implements CanActivate{

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  canActivate(): Observable<boolean> {
    const ident = JSON.parse(String(localStorage.getItem('test')));
    if (ident.types === 'admin') {
      console.log(`Auth admin return true`);
      return Observable.of(true);
    } else {
      console.log(`Auth admin return false`);
      return Observable.of(false);
    }
  }

}
