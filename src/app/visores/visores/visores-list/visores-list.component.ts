import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Visor } from '../../model/visor';



@Component({
  selector: 'app-visores-list',
  templateUrl: './visores-list.component.html',
  styleUrls: ['./visores-list.component.scss']
})
export class VisoresListComponent {

  @Input() visores: Visor[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = ['edit', 'delete', 'nome', 'ativo', 'recepcao', 'atendimento', '_id' ];


  constructor() {
  }


  onAdd() {
    this.add.emit(true);
  }

  onEdit(visor: Visor) {
    this.edit.emit(visor);
  }

  onDelete(visor: Visor) {
    this.remove.emit(visor);
  }

}
