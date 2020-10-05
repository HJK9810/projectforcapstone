import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewonePage } from './newone.page';

const routes: Routes = [
  {
    path: '',
    component: NewonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewonePageRoutingModule {}
