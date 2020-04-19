import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AngularMaterialModule } from './angular-material.module';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
