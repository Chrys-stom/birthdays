import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddbirthdayPageRoutingModule } from './addbirthday-routing.module';

import { AddbirthdayPage } from './addbirthday.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddbirthdayPageRoutingModule
  ],
  declarations: [AddbirthdayPage]
})
export class AddbirthdayPageModule {}
