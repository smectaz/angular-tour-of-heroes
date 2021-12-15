import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Donkey } from 'src/app/models/donkey.model';

@Component({
  selector: 'app-list-donkey',
  templateUrl: './list-donkey.component.html',
  styleUrls: ['./list-donkey.component.scss'],
})
export class ListDonkeyComponent implements OnInit {
  @Input() inDonkeysAvailable: Donkey[] = [];
  @Output() selectedDonkey = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  adopte(donkey: Donkey) {
    this.selectedDonkey.emit(donkey);
  }
}
