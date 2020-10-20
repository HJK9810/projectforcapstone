import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'
import { Item } from '../classes/item'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private storage: Storage) { }

  getItems() {}

  saveItems() {}

  getItem(id: String) {}

  addItem(item: Item) {}

  deleteItem(item: Item) {}
}
