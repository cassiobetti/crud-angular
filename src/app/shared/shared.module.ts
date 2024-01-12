import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { IconsPipe } from './pipes/icons.pipe';




@NgModule({
  declarations: [
    ErrorDialogComponent,
    ConfirmationDialogComponent,
    IconsPipe,

  ],
  imports: [
    CommonModule,
    AppMaterialModule,
  ],
  exports: [
    ErrorDialogComponent,
    ConfirmationDialogComponent,
    IconsPipe
  ],


})
export class SharedModule { }
