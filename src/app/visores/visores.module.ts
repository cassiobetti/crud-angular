import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisoresRoutingModule } from './visores-routing.module';
import { VisoresComponent } from './visores/visores.component';


@NgModule({
  declarations: [
    VisoresComponent
  ],
  imports: [
    CommonModule,
    VisoresRoutingModule
  ]
})
export class VisoresModule { }
