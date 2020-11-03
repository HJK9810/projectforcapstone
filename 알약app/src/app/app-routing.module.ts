import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'newone',
    loadChildren: () => import('./newone/newone.module').then( m => m.NewonePageModule)
  },
  {
    path: 'newone/:id',
    loadChildren: () => import('./newone/newone.module').then( m => m.NewonePageModule)
  },
  {
    path: 'countdown',
    loadChildren: () => import('./countdown/countdown.module').then( m => m.CountdownPageModule)
  },
  {
    path: 'countdown/:id',
    loadChildren: () => import('./countdown/countdown.module').then( m => m.CountdownPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
