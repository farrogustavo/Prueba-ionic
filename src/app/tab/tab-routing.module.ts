import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage,
    children:[
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
    
      {
        path: 'bus-ida',
        loadChildren: () => import('../bus-ida/bus-ida.module').then( m => m.BusIdaPageModule)
      },
      {
        path: 'bus-regreso',
        loadChildren: () => import('../bus-regreso/bus-regreso.module').then( m => m.BusRegresoPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
