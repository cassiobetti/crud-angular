import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, UntypedFormArray, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { Espec } from '../model/espec';
import { Salas } from '../model/salas';
import { Visor } from '../model/visor';
import { VisoresService } from '../services/visores.service';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

import { ConfirmationNomeDialogComponent } from 'src/app/shared/components/confirmation-nome-dialog/confirmation-nome-dialog.component';
import { ConfirmationEspecDialogComponent } from 'src/app/shared/components/confirmation-espec-dialog/confirmation-espec-dialog.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-visores-form',
  templateUrl: './visores-form.component.html',
  styleUrls: ['./visores-form.component.scss'],
})

export class VisoresFormComponent {

  mostrarespec: boolean = true;
  mostrarsalas: boolean = false;

  form!: FormGroup;

  constructor(private formBuilder: NonNullableFormBuilder,
    private visoresService: VisoresService,
    private service: VisoresService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    const visor: Visor = this.route.snapshot.data['visor'];
    this.form = this.formBuilder.group({
      _id: [visor._id],
      nome: [visor.nome, [Validators.required, Validators.minLength(5)]],
      ativo: [visor.ativo,],
      chamadas: [visor.chamadas],
      tempo: [visor.tempo],
      recepcao: [visor.recepcao],
      atendimento: [visor.atendimento],
      estatistica: [visor.estatistica],
      espec: this.formBuilder.array(this.obterEspecs(visor)),
      salas: this.formBuilder.array(this.obterSalas(visor))
    });
  }


  private obterEspecs(visor: Visor) {
    const especs = [];
    if (visor.espec) {
      visor.espec.forEach(espec => especs.push(this.createEspec(espec)));
    } else {
      especs.push(this.createEspec());
    }
    return especs;
  }

  private createEspec(espec: Espec = { id: '', nome: '' }) {
    return this.formBuilder.group({
      id: [espec.id],
      nome: [espec.nome]
    });
  }

  getEspecsFormArray() {
    return (<UntypedFormArray>this.form.get('espec')).controls;
  }

  addNewEspec() {
    const especs = this.form.get('espec') as UntypedFormArray;
    especs.push(this.createEspec());
  }

  removeEspec(index: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Confirma exclusão de registro?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        const especs = this.form.get('espec') as UntypedFormArray;
        especs.removeAt(index)
        }
      });
  }

  private hasDuplicateEspecs(): boolean {
    const especs = this.form.value.espec;
    const especNames = especs.map((espec: { nome: string; }) => espec.nome.toLowerCase());
    const uniqueEspecNames = [...new Set(especNames)];
    return especNames.length !== uniqueEspecNames.length;
  }

  getErrorMessage(fieldEspec: string){
    const field = this.form.get(fieldEspec);
    if (field?.hasError('required')) {}
    return 'campo obrigatorio';
  }

  private obterSalas(visor: Visor) {
    const sala = [];
    if (visor.salas) {
      visor.salas.forEach(salas => sala.push(this.createSalas(salas)));
    } else {
      sala.push(this.createSalas());

    }
    return sala;
  }

  private createSalas(salas: Salas = { id: '', nome: '' }) {
    return this.formBuilder.group({
      id: [salas.id],
      nome: [salas.nome]
    });
  }

  getSalasFormArray() {
    return (<UntypedFormArray>this.form.get('salas')).controls;

  }

  addNewSalas() {
    const salas = this.form.get('salas') as UntypedFormArray;
    salas.push(this.createSalas());
  }

  removeSalas(index: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Confirma exclusão de registro?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        const salas = this.form.get('salas') as UntypedFormArray;
        salas.removeAt(index);
        }
      });
  }

  private hasDuplicateSalas(): boolean {
    const salas = this.form.value.salas;
    const salasNames = salas.map((salas: { nome: string; }) => salas.nome.toLowerCase());
    const uniqueSalasNames = [...new Set(salasNames)];

    return salasNames.length !== uniqueSalasNames.length;
  }


  onSubmit() {
    if (this.form.value.nome.trim() === '') {
      this.dialog.open(ConfirmationNomeDialogComponent, {
        data: 'O nome deve ser informado!'
      });

    }else if (this.hasDuplicateEspecs()) {
      this.dialog.open(ConfirmationEspecDialogComponent, {
        data: 'Especialidades iguais estão cadastradas!'
      });

    }else if (this.hasDuplicateSalas()) {
      this.dialog.open(ConfirmationEspecDialogComponent, {
        data: 'Salas iguais estão cadastradas!'
      });

    }else {
      this.service.save(this.form.value).subscribe(result => this.onSuccess());
    }
}
  getErrorMessage2(fieldSalas: string){
    const field = this.form.get(fieldSalas);
    if (field?.hasError('required')) {}
    return 'campo obrigatorio';
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.onCancel();
  }

  onClickMostrarEspec() {
    this.mostrarespec = !this.mostrarespec;
  }

  onClickMostrarSalas() {
    this.mostrarsalas = !this.mostrarsalas;
  }


}



