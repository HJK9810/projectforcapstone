import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'
import { from } from 'rxjs';
import { Item } from '../classes/item'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  public items: Item[] = [];

  constructor(private storage: Storage) { }

  getItems() {

    return new Promise((reslove) => {
      this.storage.get('items').then((items) => {
        if(items) {
          this.items = items;
        }
        reslove(true);
      });
    });
  }

  saveItems() {
    this.storage.set('items', this.items);
  }

  getItem(name: String) {
    return this.items.find(item => item.name == name);
  }

  addItem(item: Item) {
    this.items.push(item);
    this.saveItems();
  }

  deleteItem(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
    this.saveItems();
  }
}
