import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatExpansionModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule
  ],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule
  ]
})

export class MaterialModule { }
