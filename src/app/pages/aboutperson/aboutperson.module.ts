import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutpersonPageRoutingModule } from './aboutperson-routing.module';

import { AboutpersonPage } from './aboutperson.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutpersonPageRoutingModule
  ],
  declarations: [AboutpersonPage]
})
export class AboutpersonPageModule {}
