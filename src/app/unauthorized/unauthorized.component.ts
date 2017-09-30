import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Quit() {
    let user = null;
    localStorage.removeItem('token');
    console.log('Token removed!')
    this.router.navigateByUrl('');
  }

}
