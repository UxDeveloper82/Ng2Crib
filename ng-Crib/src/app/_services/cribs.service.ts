import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Crib } from '../_models/crib';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CribsService {
  baseUrl = 'http://localhost:5000/api/';

constructor(private http: HttpClient) { }


  getAllCribs(): Observable<Crib[]> {
    return this.http.get<Crib[]>(this.baseUrl + 'Cribs');

  }

  getCrib(id): Observable<Crib> {
    return this.http.get<Crib>(this.baseUrl + '/Cribs/' + id);
  }

}
