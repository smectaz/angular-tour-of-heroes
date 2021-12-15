import { Injectable } from '@angular/core';
import { Donkey } from '../models/donkey.model';

@Injectable({
  providedIn: 'root',
})
export class DonkeyService {
  donkeysAvailable: Donkey[];

  constructor() {
    this.donkeysAvailable = [
      {
        id: 0,
        name: 'donkey',
        origin: 'france',
        birthDate: new Date(),
        pathImage: 'https://picsum.photos/300/300',
      },
      {
        id: 1,
        name: 'bond',
        origin: 'angleterre',
        birthDate: new Date(),
        pathImage: 'https://picsum.photos/300/300',
      },
      {
        id: 2,
        name: 'super-man',
        origin: 'usa',
        birthDate: new Date(),
        pathImage: 'https://picsum.photos/300/300',
      },
    ];
  }

  removeDonkeyofAvailableArray(donkey: Donkey) {
    const index = this.donkeysAvailable.indexOf(donkey, 0);
    if (index > -1) {
      this.donkeysAvailable.splice(index, 1);
    }
  }

  addDonkey(donkey: Donkey): void {
    donkey.id = this.donkeysAvailable.length;
    this.donkeysAvailable.unshift(donkey);
  }
}
