import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  BaseUrl: string = 'http://localhost:4000/api/';
  UserToken: string;

  constructor(private http: Http, private options: RequestOptions,
  private router: Router) { }

  AuthUser(user) {

    const req = this.http.post(this.BaseUrl + 'authentication', user)
      .subscribe(
      res => {
        if (res.json().success) {
          this.StoreToken(res.json().response);
          this.router.navigateByUrl('unauthorized');
        }
      },
      err => {
        console.log("Error occured");
      }
      );
  }

  StoreToken(token) {

    if (localStorage.getItem('token') === undefined) {
      localStorage.setItem('token', token);
      this.UserToken = token;
      this.ConfigHeaders();
    }
    else {
      localStorage.removeItem('token');
      localStorage.setItem('token', token);
      this.UserToken = token;
      this.ConfigHeaders();
    }

  }

  isConnected() {
    if(localStorage.getItem('token') != undefined) {
      return true;
    } else {
      return false;
    }

  }

  ConfigHeaders() {
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.UserToken
      })
    });
  }

}
