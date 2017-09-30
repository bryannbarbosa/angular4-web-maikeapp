import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService) { }

  Access() {
    let user = {
      email: this.email,
      password: this.password
    };
    this.authService.AuthUser(user);

  }

  ngOnInit() {
  }

}
