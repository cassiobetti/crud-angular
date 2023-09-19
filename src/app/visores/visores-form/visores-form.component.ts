import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { VisoresService } from '../services/visores.service';

@Component({
  selector: 'app-visores-form',
  templateUrl: './visores-form.component.html',
  styleUrls: ['./visores-form.component.scss']
})
export class VisoresFormComponent {

  form: FormGroup;

 constructor(private formBuilder: FormBuilder,
  private service: VisoresService,
  private snackBar: MatSnackBar,
  private location: Location) {
  this.form = this.formBuilder.group({
    nome: [null],
    ativo: [null],
    chamadas: [null],
    tempo: [null],
    recepcao: [null],
    atendimento: [null],
    estatistica: [null]
  })
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

}
