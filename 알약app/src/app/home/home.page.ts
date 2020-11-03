import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { from } from 'rxjs';
import { NewonePage } from '../newone/newone.page';
import { ItemService } from '../services/item.service';
import { Item } from '../classes/item';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public itemService:ItemService, private navCtrl: NavController) {

  }

  viewItem(name: String) {
    this.navCtrl.navigateBack('newone/'+name);
  }

  deleteItem(item: Item) {
    this.itemService.deleteItem(item);
  }

}
