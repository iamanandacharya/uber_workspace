import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { LocationPickerComponent } from './pickers/location-picker/location-picker.component';
import { MapModalComponent } from './map-modal/map-modal.component';
import { LocationSetComponent } from './location-set/location-set.component';
import { DestinationModelComponent } from './destination-model/destination-model.component';

@NgModule({
  declarations: [LocationPickerComponent, MapModalComponent, LocationSetComponent, DestinationModelComponent],
  imports: [CommonModule, IonicModule],
  exports: [LocationPickerComponent, DestinationModelComponent, LocationSetComponent, MapModalComponent],
  entryComponents: [MapModalComponent, DestinationModelComponent]
})
export class SharedModule {}
