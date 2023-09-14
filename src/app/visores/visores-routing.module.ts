import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VisoresComponent } from './visores/visores.component';

const routes: Routes = [
  { path: '', component: VisoresComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisoresRoutingModule { }
