import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeadFormComponent } from './lead-form/lead-form.component';
import { AppRoutingModule } from './/app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConfigService } from './services/config.service';
import { LeadFormService } from './services/lead-form.service';

import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

@NgModule({
  declarations: [
    AppComponent,
    LeadFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MultiselectDropdownModule
  ],
  providers: [
    ConfigService,
    LeadFormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
