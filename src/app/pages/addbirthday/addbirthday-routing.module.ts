import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddbirthdayPage } from './addbirthday.page';

const routes: Routes = [
  {
    path: '',
    component: AddbirthdayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddbirthdayPageRoutingModule {}
