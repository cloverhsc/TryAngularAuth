import { AuthenticationService } from './../service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {
  public account: string;
  public password: string;

  constructor(
    private authServ: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authServ.login(this.account, this.password).subscribe( (result) => {
      if (result.result === 'success') {
        localStorage.setItem(
          'test', JSON.stringify(
            { token: result.token, types: result.types })
        );
        console.log(result);
        if (result.types === 'admin') {
          console.log('--------------------');
          this.router.navigate(['/acct1']);
        } else {
          this.router.navigate(['/acct2']);
        }
      } else {
        alert('Account or password error.');
      }
    });

    // this.authServ.login(this.account, this.password);
  }
}
