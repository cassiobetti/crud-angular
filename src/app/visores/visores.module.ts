import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { VisoresRoutingModule } from './visores-routing.module';
import { VisoresComponent } from './visores/visores.component';
import { VisoresFormComponent } from './visores-form/visores-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VisoresListComponent } from './visores/visores-list/visores-list.component';


@NgModule({
  declarations: [
    VisoresComponent,
    VisoresFormComponent,
    VisoresListComponent
  ],
  imports: [
    CommonModule,
    VisoresRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class VisoresModule { }
