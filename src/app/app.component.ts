import { Component, Input } from '@angular/core';
import { Donkey } from 'src/app/models/donkey.model';
import { DonkeyService } from 'src/app/services/donkey.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Challenge 5 les interactions Angular';
  donkeysAvailable: Donkey[];
  donkeySelected: Donkey | undefined;

  constructor(private donkeyService: DonkeyService) {
    this.donkeysAvailable = this.donkeyService.donkeysAvailable;
  }

  selectedDonkey(donkey: Donkey) {
    //console.log(donkey);
    this.donkeySelected = donkey;
    this.removeDonkeyofAvailableArray(donkey);
  }

  removeDonkeyofAvailableArray(donkey: Donkey) {
    this.donkeyService.removeDonkeyofAvailableArray(donkey);
  }
}
