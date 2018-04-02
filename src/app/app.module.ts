import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'


import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PlaceComponent } from './place/place.component';
import { PlaceDetailComponent } from './place/detail/place-detail.component';
import { BoardComponent } from './board/board.component';
import { NewPlaceFormComponent } from './new-place-form/new-place-form.component';

// services
import { PlacesService } from './places.service';


@NgModule({
  declarations: [
    AppComponent,
    PlaceComponent,
    PlaceDetailComponent,
    BoardComponent,
    NewPlaceFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpModule
  ],
  providers: [PlacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
