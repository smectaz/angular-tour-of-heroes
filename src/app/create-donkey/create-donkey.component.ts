import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Donkey } from 'src/app/models/donkey.model';
import { DonkeyService } from 'src/app/services/donkey.service';

@Component({
  selector: 'app-create-donkey',
  templateUrl: './create-donkey.component.html',
  styleUrls: ['./create-donkey.component.scss'],
})
export class CreateDonkeyComponent implements OnInit {
  donkey: Donkey = new Donkey();
  constructor(private donkeyService: DonkeyService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.donkeyService.addDonkey(this.donkey);
    this.router.navigate(['']);
  }
}
