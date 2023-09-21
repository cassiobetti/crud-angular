import { ResolveFn } from '@angular/router';

export const visorResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};

import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot,} from '@angular/router';
import { Observable, of } from 'rxjs';

import { Visor } from '../model/visor';
import { VisoresService } from '../services/visores.service';


export const visorResolver: ResolveFn<Observable<Visor>> = (route, state,  service: VisoresService =
  inject(VisoresService)) => {

   if (route.params?.['id']){
    return service.loadById(route.params['id']);
  }
  return of({ id: '', nome: '', ativo: '', chamadas: '', tempo: '', recepcao: '', atendimento: '', estatistica: '' });
};

