import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutpersonPage } from './aboutperson.page';

const routes: Routes = [
  {
    path: '',
    component: AboutpersonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutpersonPageRoutingModule {}
