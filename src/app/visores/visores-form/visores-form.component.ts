import { Location } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Especialidades } from '../model/especialidades';
import { Salas } from '../model/salas';
import { Visor } from '../model/visor';
import { VisoresService } from '../services/visores.service';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';




@Component({
  selector: 'app-visores-form',
  templateUrl: './visores-form.component.html',
  styleUrls: ['./visores-form.component.scss'],


})



export class VisoresFormComponent {



  especialidades: Observable<Especialidades[]>;
  displayedColumnsespec = ['delete','name'];

  salas: Observable<Salas[]>;
  displayedColumnssalas = ['delete','_id','name'];

  mostrarespec: boolean;
  mostrarsalas: boolean;

  form = this.formBuilder.group({
    _id: [''],
    nome: [''],
    ativo: [''],
    chamadas: [''],
    tempo: [''],
    recepcao: [''],
    atendimento: [''],
    estatistica: ['']
  });

  formespec = this.formBuilder.group({
    _id: [''],
    name: ['']
  });

  formsalas = this.formBuilder.group({
    _id: [''],
    name: ['']
  });

 constructor(private formBuilder: NonNullableFormBuilder,
  private visoresService: VisoresService,
  private service: VisoresService,
  private snackBar: MatSnackBar,
  private location: Location,
  private route: ActivatedRoute,
  public dialog: MatDialog
  ) {


  


  this.especialidades = this.visoresService.Espec();

  this.salas = this.visoresService.Salas();

  this.mostrarespec = false;
  this.mostrarsalas = false;



 }



ngOnInit(): void {
  const visor: Visor = this.route.snapshot.data['visor'];
  this.form.setValue({
    _id: visor._id,
    nome: visor.nome,
    ativo: visor.ativo,
    chamadas: visor.chamadas,
    tempo: visor.tempo,
    recepcao: visor.recepcao,
    atendimento: visor.atendimento,
    estatistica: visor.estatistica
  });

  const especialidades: Especialidades = this.route.snapshot.data['especialidades'];
  this.formespec.setValue({
    _id: especialidades._id,
    name: especialidades.name,
  });

  const salas: Salas = this.route.snapshot.data['salas'];
  this.formsalas.setValue({
    _id: salas._id,
    name: salas.name,
  });

}

 onSubmit() {
    this.service.save(this.form.value)
        .subscribe(result => this.onSuccess());

 }

 onSubmit2() {
  this.service.saveespec(this.formespec.value)
  .subscribe(result2 => this.onSuccess1());

 }

 onSubmit3() {
  this.service.savesalas(this.formsalas.value)
  .subscribe(result3 => this.onSuccess2());
 }


 onCancel() {
  this.location.back();
 }

 private onSuccess() {
  this.snackBar.open('Visor salvo com sucesso!','', {duration: 1000 });
  this.onCancel();
 }

 private onSuccess1() {
  this.snackBar.open('Visor salvo com sucesso!','', {duration: 1000 });
  this.refresh();
 }

 private onSuccess2() {
  this.snackBar.open('Visor salvo com sucesso!','', {duration: 1000 });
  this.refresh2();
 }


 private onError() {
  this.snackBar.open('Erro ao salvar visor.','', {duration: 1000 });
 }

 onClickMostrarEspec() {
  this.mostrarespec = !this.mostrarespec;
 }

 onClickMostrarSalas() {
  this.mostrarsalas = !this.mostrarsalas;
 }



onRemoveEspec(espec: Especialidades) {
  this.visoresService.removeespec(espec._id).subscribe(
    () => {
      this.refresh();
    }
  )
}

onRemoveSalas(salas: Salas) {
  this.visoresService.removesalas(salas._id).subscribe(
    () => {
      this.refresh2();
    }
  )
}

refresh() {
  this.especialidades = this.visoresService.Espec();

}

refresh2() {
  this.salas = this.visoresService.Salas();

}


}
