import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CribListingComponent } from './crib-listing/crib-listing.component';
import { CribCardComponent } from './crib-card/crib-card.component';
import { CribsService } from './_services/cribs.service';
import { CridFormComponent } from './crid-form/crid-form.component';

@NgModule({
   declarations: [
      AppComponent,
      CribListingComponent,
      CribCardComponent,
      CridFormComponent
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
