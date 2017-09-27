import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AuthService {

  BaseUrl:string = 'http://localhost:4000/api/';
  UserToken: string;

  constructor(private http: Http, private options: RequestOptions) { }

  AuthUser(user) {

    const req = this.http.post(this.BaseUrl + 'authentication', user)
      .subscribe(
        res => {
          this.StoreToken(res.json().response);
        },
        err => {
          console.log("Error occured");
        }
      );


  }

  StoreToken(token) {

    if(localStorage.getItem('token') === undefined) {
      localStorage.setItem('token', token);
      this.UserToken = token;
      console.log(token);
    }

    else {
      localStorage.removeItem('token');
      localStorage.setItem('token', token);
      this.UserToken = token;
      console.log(token);
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
