import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Visor } from '../model/visor';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VisoresService {

  private readonly API = '/assets/visores.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Visor[]>(this.API)
    .pipe(
      first(),
      delay(2000),
      tap(visores => console.log(visores) )
    );
  }
}
