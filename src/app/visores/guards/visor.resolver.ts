import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot,} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Visor } from '../model/visor';
import { VisoresService } from '../services/visores.service';

@Injectable({
  providedIn: 'root'
})
export class visorResolver implements Resolve<Visor> {

  constructor(private service: VisoresService) {}

  resolve(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<Visor> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
  }
   return of({ _id: '', nome: '', ativo: '', chamadas: '', tempo: '', recepcao: '', atendimento: '', estatistica: '' });
 }
}
