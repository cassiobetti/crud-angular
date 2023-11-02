import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';

import { Salas } from '../model/salas';
import { Visor } from '../model/visor';
import { Especialidades } from './../model/especialidades';


@Injectable({
  providedIn: 'root'
})
export class VisoresService {

  private readonly API = 'api/visores';

  private readonly APIESP = 'api/especialidades';

  private readonly APISALAS = 'api/salas';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Visor[]>(this.API)
    .pipe(
      first(),
      //tap(visores => console.log(visores) )
    );
  }


  loadById(id: string) {
    return this.httpClient.get<Visor>(`${this.API}/${id}`);
  }

  save(record: Partial<Visor>) {
    if (record._id) {
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Visor>) {
    return this.httpClient.post<Visor>(this.API, record);
  }

  private update(record: Partial<Visor>){
    return this.httpClient.put<Visor>(`${this.API}/${record._id}`, record);
  }

  remove(id: String){
    return this.httpClient.delete(`${this.API}/${id}`);
  }



  Espec() {
    return this.httpClient.get<Especialidades[]>(this.APIESP)
    .pipe(
      first(),
    );
  }

  saveespec(recordespec:Partial<Especialidades>) {
    return this.httpClient.post<Especialidades>(this.APIESP, recordespec);
  }

  removeespec(id: String){
    return this.httpClient.delete(`${this.APIESP}/${id}`);
  }



  Salas() {
    return this.httpClient.get<Salas[]>(this.APISALAS)
    .pipe(
      first(),
    );
  }

  savesalas(recordsalas:Partial<Salas>) {
    return this.httpClient.post<Salas>(this.APISALAS, recordsalas);
  }

  removesalas(id: String){
    return this.httpClient.delete(`${this.APISALAS}/${id}`);
  }

 }


