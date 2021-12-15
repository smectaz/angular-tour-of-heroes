import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignupComponent } from './signup/signup.component';
import { CreateDonkeyComponent } from './create-donkey/create-donkey.component';
import { ListDonkeyComponent } from './list-donkey/list-donkey.component';
import { UserDonkeyComponent } from './user-donkey/user-donkey.component';

const ROUTES: Routes = [
  {
    path: 'userProfil',
    component: UserProfileComponent,
  },

  {
    path: 'signUp',
    component: SignupComponent,
  },

  {
    path: 'createDonkey',
    component: CreateDonkeyComponent,
  },

  {
    path: 'listDonkey',
    component: ListDonkeyComponent,
  },

  {
    path: 'userDonkey',
    component: UserDonkeyComponent,
  },
];

export { ROUTES };

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
