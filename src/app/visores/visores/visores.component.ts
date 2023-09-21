import { Component } from '@angular/core';
import { Visor } from '../model/visor';
import { VisoresService } from '../services/visores.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-visores',
  templateUrl: './visores.component.html',
  styleUrls: ['./visores.component.scss']
})
export class VisoresComponent {

  visores$: Observable<Visor[]>;


  constructor(
    private visoresService: VisoresService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute

    ){
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
}
