import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImoveisApiModel } from './imoveis-api-model.';

@Injectable({
  providedIn: 'root'
})
export class ImoveisApiService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://treinamentodecola-default-rtdb.firebaseio.com/imoveis.json';

  public get(): Observable<ImoveisApiModel[]> {
    return this.http.get<ImoveisApiModel[]>(this.apiUrl);
  }
}
