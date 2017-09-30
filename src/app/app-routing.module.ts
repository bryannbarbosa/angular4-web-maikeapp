import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AuthGuardService } from './auth-guard.service';

import { SigninComponent }   from './signin/signin.component';
import { SignupComponent }   from './signup/signup.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { CategoriesComponent } from './categories/categories.component';


const appRoutes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent  },
  { path: 'categories', component: CategoriesComponent},
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'unauthorized', component: UnauthorizedComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
