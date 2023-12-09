import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusIdaPageRoutingModule } from './bus-ida-routing.module';

import { BusIdaPage } from './bus-ida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusIdaPageRoutingModule
  ],
  declarations: [BusIdaPage]
})
export class BusIdaPageModule {}
