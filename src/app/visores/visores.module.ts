import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { VisoresRoutingModule } from './visores-routing.module';
import { VisoresComponent } from './visores/visores.component';


@NgModule({
  declarations: [
    VisoresComponent
  ],
  imports: [
    CommonModule,
    VisoresRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class VisoresModule { }
