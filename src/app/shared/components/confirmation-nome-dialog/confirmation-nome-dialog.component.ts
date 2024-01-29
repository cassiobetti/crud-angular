import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-confirmation-nome-dialog',
  templateUrl: './confirmation-nome-dialog.component.html',
  styleUrls: ['./confirmation-nome-dialog.component.scss']
})
export class ConfirmationNomeDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmationNomeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {}

  onConfirmNome(result: boolean): void {
    this.dialogRef.close(result);
  }

}
