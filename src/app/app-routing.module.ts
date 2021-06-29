import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LandmarksComponent } from './Landmarks/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: LandmarksComponent },
  { path: 'contact', component: ContactComponent },

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];
export const AppRoutingModule = RouterModule.forRoot(routes);