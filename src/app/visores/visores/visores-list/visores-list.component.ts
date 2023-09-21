import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Visor } from '../../model/visor';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-visores-list',
  templateUrl: './visores-list.component.html',
  styleUrls: ['./visores-list.component.scss']
})
export class VisoresListComponent {

  @Input() visores: Visor[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);

  readonly displayedColumns = ['actions', 'nome', 'ativo', 'recepcao', 'atendimento', '_id' ];

  constructor() {}


  onAdd() {
    this.add.emit(true);
  }

  onEdit(visor: Visor) {
    this.edit.emit(visor);
  }
}
