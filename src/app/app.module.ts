import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PhotographService } from './services/photographService';
import { CollectionScanComponent } from './component/collection-scan/collection-scan.component';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './component/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    CollectionScanComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    CommonModule
  ],
  providers: [PhotographService],
  bootstrap: [CollectionScanComponent]
})
export class AppModule { }
