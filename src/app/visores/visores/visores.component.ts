import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { Visor } from '../model/visor';
import { VisoresService } from '../services/visores.service';

@Component({
  selector: 'app-visores',
  templateUrl: './visores.component.html',
  styleUrls: ['./visores.component.scss']
})
export class VisoresComponent {

  visores$: Observable<Visor[]> | null = null;


  constructor(
    private visoresService: VisoresService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,

    ){
     this.refresh();
  }

  refresh() {
    this.visores$ = this.visoresService.list()
    .pipe(
     catchError(error => {
       this.onError('Erro ao carregar visores.')
       return of([])
     })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEdit(visor: Visor) {
    this.router.navigate(['edit',visor._id], {relativeTo: this.route});
  }



  onRemove(visor: Visor) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Deseja realmente excluir a tela?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.visoresService.remove(visor._id).subscribe(
          () => {
            this.refresh();
            this.snackBar.open('Visor removido com sucesso!','X', {
              duration: 1000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          },
          () => this.onError('Erro ao tentar remover visor.')
        );
      }
    });
  }




}
