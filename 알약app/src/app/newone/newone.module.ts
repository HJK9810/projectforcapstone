import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewonePageRoutingModule } from './newone-routing.module';

import { NewonePage } from './newone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewonePageRoutingModule
  ],
  declarations: [NewonePage]
})
export class NewonePageModule {}
