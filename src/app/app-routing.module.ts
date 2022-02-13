import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'gallery',
    loadChildren: () => import('./pages/gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'aboutperson',
    loadChildren: () => import('./pages/aboutperson/aboutperson.module').then( m => m.AboutpersonPageModule)
  },
  {
    path: 'birthdays',
    loadChildren: () => import('./pages/birthdays/birthdays.module').then( m => m.BirthdaysPageModule)
  },
  {
    path: 'addbirthday',
    loadChildren: () => import('./pages/addbirthday/addbirthday.module').then( m => m.AddbirthdayPageModule)
  },
  {
    path: 'do',
    loadChildren: () => import('./pages/do/do.module').then( m => m.DoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
