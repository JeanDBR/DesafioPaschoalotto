import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Divida } from 'src/app/models/divida';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DividasService {

  baseUrl = `${environment.baseUrl}api/divida`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Divida[]> {
    return this.http.get<Divida[]>(`${this.baseUrl}`);
  }
}
