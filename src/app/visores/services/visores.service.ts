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
      tap(visores => console.log(visores) )
    );
  }

  loadById(id: string) {
    return this.httpClient.get<Visor>(`${this.API}/${id}`);
  }

  save(record: Partial<Visor>) {
    return this.httpClient.post<Visor>(this.API, record);
  }
}
