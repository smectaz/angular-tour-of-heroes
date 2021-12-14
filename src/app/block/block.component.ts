import { Component, OnInit } from '@angular/core';
import { Block } from '../block';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {

  constructor() { }

  block: Block = {
    name: 'A B C'
  };

  ngOnInit(): void {
  }

}
