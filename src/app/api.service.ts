import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class APIService {

  baseUrl: string = 'http://localhost:4000/api/';

  constructor(private http: Http) { }

  getCategories() {
    let headers: Headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get(this.baseUrl + 'categories', { headers: headers })
    .subscribe(response => {
      response.json();
    });
  }

}
