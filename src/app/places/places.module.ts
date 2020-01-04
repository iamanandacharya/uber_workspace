import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { PlacesPage } from './places.page';
import { PlacesRoutingModule } from './places-routing.module';
import { LocationSetComponent } from '../shared/location-set/location-set.component';
import { LocationPickerComponent } from '../shared/pickers/location-picker/location-picker.component';

@NgModule({
  exports: [],
  imports: [
    CommonModule,
    IonicModule,
    PlacesRoutingModule
  ],
  entryComponents: [],
  declarations: [PlacesPage]
})
export class PlacesPageModule {}
