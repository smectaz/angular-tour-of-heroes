import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { BlockComponent } from './block/block.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { CreateDonkeyComponent } from './create-donkey/create-donkey.component';
import { ListDonkeyComponent } from './list-donkey/list-donkey.component';
import { UserDonkeyComponent } from './user-donkey/user-donkey.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    BlockComponent,
    UserProfileComponent,
    MenuComponent,
    SignupComponent,
    CreateDonkeyComponent,
    ListDonkeyComponent,
    UserDonkeyComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
