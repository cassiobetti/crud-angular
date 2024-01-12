import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';

import { Visor } from '../model/visor';
import { Espec } from '../model/espec';
import { Observable } from 'rxjs';


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
      first()
    );
  }

  getDados(): Observable<any[]> {
    return this.httpClient.get<any[]>('api/visores');
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
    return this.httpClient.get<Espec[]>(this.APIESP)
    .pipe(
      first(),
    );
  }

  saveespec(recordespec:Partial<Espec>) {
    return this.httpClient.post<Espec>(this.APIESP, recordespec);
  }



 }


