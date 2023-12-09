import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusIdaPage } from './bus-ida.page';

const routes: Routes = [
  {
    path: '',
    component: BusIdaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusIdaPageRoutingModule {}
