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
  private snackBar: MatSnackBar) {
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
        .subscribe(result => console.log(result), error => this.onError());
 }

 onCancel() {

 }

 private onError() {
  this.snackBar.open('Erro ao salvar visor.','', {duration: 1000 });
 }

}
