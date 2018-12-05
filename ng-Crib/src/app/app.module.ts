import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CribListingComponent } from './crib-listing/crib-listing.component';
import { CribCardComponent } from './crib-card/crib-card.component';
import { CribsService } from './_services/cribs.service';

@NgModule({
   declarations: [
      AppComponent,
      CribListingComponent,
      CribCardComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule
   ],
   providers: [
      CribsService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
