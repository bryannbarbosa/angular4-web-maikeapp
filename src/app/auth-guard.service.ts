import { Injectable } from '@angular/core';
import { CanActivate }    from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
   if(this.authService.isConnected()) {
     return true;
   } else {
     this.router.navigateByUrl('');
     return false;
   }
 }

}
