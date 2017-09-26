import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AuthService {

  BaseUrl:string = 'http://localhost:4000/api/'

  constructor(private http: Http) { }

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
    }

    else {
      localStorage.removeItem('token');
      localStorage.setItem('token', token);
    }

  }

}
