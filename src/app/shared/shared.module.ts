import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { IconsPipe } from './pipes/icons.pipe';
import { ConfirmationNomeDialogComponent } from './components/confirmation-nome-dialog/confirmation-nome-dialog.component';
import { ConfirmationEspecDialogComponent } from './components/confirmation-espec-dialog/confirmation-espec-dialog.component';




@NgModule({
  declarations: [
    ErrorDialogComponent,
    ConfirmationDialogComponent,
    IconsPipe,
    ConfirmationNomeDialogComponent,
    ConfirmationEspecDialogComponent,

  ],
  imports: [
    CommonModule,
    AppMaterialModule,
  ],
  exports: [
    ErrorDialogComponent,
    ConfirmationDialogComponent,
    ConfirmationNomeDialogComponent,
    IconsPipe
  ],


})
export class SharedModule { }
