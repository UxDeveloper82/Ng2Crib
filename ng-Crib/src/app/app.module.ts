import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CribListingComponent } from './crib-listing/crib-listing.component';
import { CribCardComponent } from './crib-card/crib-card.component';
import { CribsService } from './_services/cribs.service';
import { CridFormComponent } from './crid-form/crid-form.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './_services/auth.service';
import { RegisterComponent } from './register/register.component';

@NgModule({
   declarations: [
      AppComponent,
      CribListingComponent,
      CribCardComponent,
      CridFormComponent,
      HomeComponent,
      NavbarComponent,
      RegisterComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule
   ],
   providers: [
      AuthService,
      CribsService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
