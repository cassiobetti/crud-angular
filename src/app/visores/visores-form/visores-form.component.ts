import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';

import { VisoresService } from '../services/visores.service';
import { ActivatedRoute } from '@angular/router';
import { Espec, Visor } from '../model/visor';
import { Input } from '@angular/core';
import { Especialidades } from '../model/especialidades';
import { Salas } from '../model/salas';

@Component({
  selector: 'app-visores-form',
  templateUrl: './visores-form.component.html',
  styleUrls: ['./visores-form.component.scss'],


})



export class VisoresFormComponent {

  especialidades: Especialidades[] = [
    {_id: '1', name: 'CARDIOLOGIA'},
    {_id: '2', name: 'CARDIOLOGIA'},
    {_id: '1', name: 'CARDIOLOGIA'}
  ];
  displayedColumns = ['delete','name'];

  salas: Salas[] = [
    {_id: '1', name: 'CARDIOLOGIA'},
    {_id: '2', name: 'CARDIOLOGIA'},
    {_id: '1', name: 'CARDIOLOGIA'}
  ];
  displayedColumnsSalas = ['delete','_id','name'];

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

 constructor(private formBuilder: NonNullableFormBuilder,
  private service: VisoresService,
  private snackBar: MatSnackBar,
  private location: Location,
  private route: ActivatedRoute) {

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
}

 onSubmit() {
    this.service.save(this.form.value)
        .subscribe(result => this.onSuccess(), error => this.onError());
 }

 onCancel() {
  this.location.back();
 }

 private onSuccess() {
  this.snackBar.open('Visor salvo com sucesso!','', {duration: 1000 });
  this.onCancel();
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

}
