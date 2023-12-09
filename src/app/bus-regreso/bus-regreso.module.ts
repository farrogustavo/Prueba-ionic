import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusRegresoPageRoutingModule } from './bus-regreso-routing.module';

import { BusRegresoPage } from './bus-regreso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusRegresoPageRoutingModule
  ],
  declarations: [BusRegresoPage]
})
export class BusRegresoPageModule {}
