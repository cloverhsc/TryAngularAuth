import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public account: string;
  public password: string;

  constructor(
    private authServ: AuthenticationService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    Observable.timer(3000).subscribe(res => {
      const rp = this.authServ.login(this.account, this.password);
      console.log(rp);
    });

    // this.authServ.login(this.account, this.password);
  }
}
