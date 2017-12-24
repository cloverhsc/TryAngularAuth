import { TestBed, inject, async } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationService]
    });
  });

  it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));

  it(`Should have login service`, inject(
    [AuthenticationService], (loginServ: AuthenticationService) => {
      expect(loginServ.login).toBeTruthy();
    }));

  it(`Should get token = 'clover', types = 'admin' if login by clover`, async(
    () => {
      let serv: AuthenticationService;
      serv = TestBed.get(AuthenticationService);
      serv.login('clover', 'clover').subscribe( res => {
        expect(res['token']).toBe('revolc');
        expect(res['types']).toBe('admin');
      });
    }
  ));
});
