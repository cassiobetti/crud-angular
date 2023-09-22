import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { VisoresService } from '../services/visores.service';
import { ActivatedRoute } from '@angular/router';
import { Visor } from '../model/visor';

@Component({
  selector: 'app-visores-form',
  templateUrl: './visores-form.component.html',
  styleUrls: ['./visores-form.component.scss']
})
export class VisoresFormComponent {

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

}
