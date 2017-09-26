import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { SigninComponent }   from './signin/signin.component';
import { SignupComponent }   from './signup/signup.component';

const appRoutes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent  },
  { path: '',   redirectTo: '/signin', pathMatch: 'full' },
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
