import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Item } from '../classes/item';
import {} from '../services/item.service';

@Component({
  selector: 'app-newone',
  templateUrl: './newone.page.html',
  styleUrls: ['./newone.page.scss'],
})
export class NewonePage implements OnInit {
  private item: Item;

  constructor() {
    this.item = {
      id: '',
      name: '',
      count: '',
      weekDay: ''
    }
   }

  ngOnInit() {
  }

}
