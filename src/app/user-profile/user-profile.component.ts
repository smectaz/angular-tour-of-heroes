import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  User = {
    name : 'Etchebest',
    firstName : 'Philippe',
    age : 45,
    quote : 'C\'est un vrai cauchemar',
    photo : 'https://randomuser.me/api/portraits/lego/8.jpg'
  };
  constructor() { }

  ngOnInit(): void {
  }

  hiddingAge = true;

  eraseAge() {
    this.hiddingAge = !this.hiddingAge;
  }
}
