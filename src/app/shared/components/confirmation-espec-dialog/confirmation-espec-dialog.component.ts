import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-espec-dialog',
  templateUrl: './confirmation-espec-dialog.component.html',
  styleUrls: ['./confirmation-espec-dialog.component.scss']
})
export class ConfirmationEspecDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationEspecDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {}

  onConfirmEspec(result: boolean): void {
    this.dialogRef.close(result);
  }

}
