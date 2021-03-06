import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TexasComponent } from './Texas/Texas.component';
import { LandmarksComponent } from './Landmarks/Landmarks.component';
import { HomeComponent } from './home/home.component';
import { AdventuresComponent } from './adventures/adventures.component';
import { FunFactsComponent } from './fun-facts/fun-facts.component';

@NgModule({
  declarations: [
    AppComponent,
    TexasComponent,
    LandmarksComponent,
    HomeComponent,
    AdventuresComponent,
    FunFactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }