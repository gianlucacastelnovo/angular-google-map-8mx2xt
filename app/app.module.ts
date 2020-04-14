import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';
import { LocationComponent } from './location.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule,
  AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCSIFuXPQXel1splGkx5ElXoU1bL60Jn-I'
    })
     ],
  declarations: [ AppComponent, LocationComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
