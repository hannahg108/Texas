import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TexasComponent } from './Texas/Texas.component';
import { LandmarksComponent } from './Landmarks/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AdventuresComponent } from './adventures/adventures.component';

@NgModule({
  declarations: [
    AppComponent,
    TexasComponent,
    LandmarksComponent,
    ContactComponent,
    HomeComponent,
    AdventuresComponent
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