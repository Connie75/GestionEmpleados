import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Local } from '../models/local';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  private apiUrl = 'http://localhost:3000/locales'; 

  constructor(private http: HttpClient) {}

  getLocales(): Observable<Local[]> {
    return this.http.get<Local[]>(this.apiUrl);
  }

  addLocal(local: Local): Observable<Local> {
    return this.http.post<Local>(this.apiUrl, local);
  }
}
