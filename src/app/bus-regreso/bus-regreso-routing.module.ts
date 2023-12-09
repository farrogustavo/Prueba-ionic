import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusRegresoPage } from './bus-regreso.page';

const routes: Routes = [
  {
    path: '',
    component: BusRegresoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusRegresoPageRoutingModule {}
