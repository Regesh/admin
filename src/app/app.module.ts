import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
 * @desc modules
 */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

/**
 * @desc components
 */
import { AppComponent } from './core/containers/app';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
