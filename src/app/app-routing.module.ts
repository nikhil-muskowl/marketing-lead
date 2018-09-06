import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LeadFormComponent } from './lead-form/lead-form.component';

const routes: Routes = [
  { path: 'lead-form', component: LeadFormComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
