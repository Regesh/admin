import { Component } from '@angular/core';

@Component({
  selector: 'admin',
  template: `
    <mat-sidenav-container class="example-container" fullscreen>
      <mat-sidenav mode="side" opened>
        <mat-nav-list>
          
          <!-- menu item -->
          <a mat-list-item>
            <mat-icon mat-list-icon>search</mat-icon>
            <span mat-line>Catalog</span>
            <span mat-line class="secondary">the main catalog</span>
          </a>
          <!-- /menu item -->

          <mat-accordion>
            <mat-expansion-panel>
              <mat-expansion-panel-header>
                <mat-panel-title>
                  Brands
                </mat-panel-title>
              </mat-expansion-panel-header>

              <!-- menu item -->
              <a mat-list-item>
                <mat-icon mat-list-icon>search</mat-icon>
                <span mat-line>Brand #1</span>
                <span mat-line class="secondary">the best brand there is</span>
              </a>
              <!-- /menu item -->

              <!-- menu item -->
              <a mat-list-item>
                <mat-icon mat-list-icon>search</mat-icon>
                <span mat-line>Brand #2</span>
                <span mat-line class="secondary">the 2nd best brand there is</span>
              </a>
              <!-- /menu item -->
              
            </mat-expansion-panel>
          </mat-accordion>
          
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        page content        
      </mat-sidenav-content>
    </mat-sidenav-container>
  `
})
export class AppComponent {}
