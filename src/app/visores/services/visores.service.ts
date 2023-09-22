import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Visor } from '../model/visor';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VisoresService {

  private readonly API = 'api/visores';

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
}
