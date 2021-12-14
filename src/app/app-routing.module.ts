import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { SignupComponent } from "./signup/signup.component";

const ROUTES: Routes = [
  {
    path: 'userProfil',
    component: UserProfileComponent
  },

  {
    path: 'signup',
    component: SignupComponent
  }
];

export { ROUTES };

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
