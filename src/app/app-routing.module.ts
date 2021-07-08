import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LandmarksComponent } from './Landmarks/Landmarks.component';
import { AdventuresComponent } from './adventures/adventures.component';
import { FunFactsComponent } from './fun-facts/fun-facts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Landmarks', component: LandmarksComponent },
  { path: 'adventures', component: AdventuresComponent },
  { path: 'fun-facts', component: FunFactsComponent },
  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];
export const AppRoutingModule = RouterModule.forRoot(routes);