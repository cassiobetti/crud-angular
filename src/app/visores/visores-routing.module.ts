import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VisoresComponent } from './visores/visores.component';
import { VisoresFormComponent } from './visores-form/visores-form.component';
import { visorResolver } from './guards/visor.resolver';

const routes: Routes = [
  { path: '', component: VisoresComponent},
  { path: 'new', component: VisoresFormComponent, resolve: { visor: visorResolver }},
  { path: 'edit/:id', component: VisoresFormComponent, resolve: { visor: visorResolver }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisoresRoutingModule { }
