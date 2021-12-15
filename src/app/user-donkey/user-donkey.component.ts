import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Donkey } from 'src/app/models/donkey.model';
import { DonkeyService } from 'src/app/services/donkey.service';

@Component({
  selector: 'app-user-donkey',
  templateUrl: './user-donkey.component.html',
  styleUrls: ['./user-donkey.component.scss'],
})
export class UserDonkeyComponent implements OnInit {
  @Input() inDonkey: Donkey | undefined;
  myDonkeys: Donkey[];

  constructor() {
    this.myDonkeys = [];
  }

  ngOnInit(): void {}

  ngOnChanges() {
    //console.log(this.inDonkey);
    if (this.inDonkey) {
      this.myDonkeys?.push(this.inDonkey);
      console.log(this.inDonkey);
    }
  }
}
