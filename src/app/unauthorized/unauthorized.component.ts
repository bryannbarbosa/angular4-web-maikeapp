import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { APIService } from '../api.service';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent implements OnInit {

  categories: any;

  constructor(private router: Router, private API: APIService) { }

  ngOnInit() {

  }

  Quit() {
    let user = null;
    localStorage.removeItem('token');
    console.log('Token removed!')
    this.router.navigateByUrl('');
  }

}
