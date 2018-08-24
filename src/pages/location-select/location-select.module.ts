import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationSelect } from './location-select';

@NgModule({
  declarations: [
    LocationSelect,
  ],
  imports: [
    IonicPageModule.forChild(LocationSelect),
  ],
})
export class LocationSelectPageModule {}
