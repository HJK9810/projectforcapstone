import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Item } from '../classes/item';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-newone',
  templateUrl: './newone.page.html',
  styleUrls: ['./newone.page.scss'],
})
export class NewonePage implements OnInit {
  private item: Item;
  private editable: boolean = false;

  constructor(private route: ActivatedRoute, private itemservices: ItemService, private navCtrl: NavController) {
    this.item = {
      name: '',
      count: '',
      weekDay: ''
    }
   }

  ngOnInit() {
    let name = this.route.snapshot.paramMap.get('name');

    if(name) {
      this.itemservices.getItems().then(() => {
        this.editable = true;
        this.item = this.itemservices.getItem(name);
      });
    }
  }

  saveItem() {
    if(this.editable) {
      this.itemservices.saveItems();
    } else {
      this.itemservices.addItem(this.item);
    }

    this.navCtrl.navigateBack('/countdown');
  }

}
