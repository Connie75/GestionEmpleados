import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from '../models/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private apiUrl = 'http://localhost:3000/api/configs';

  constructor(private http: HttpClient) { }

  getConfigs(): Observable<Config[]> {
    return this.http.get<Config[]>(this.apiUrl);
  }

  addConfig(config: Config): Observable<Config> {
    return this.http.post<Config>(this.apiUrl, config);
  }

  updateConfig(id: string, config: Config): Observable<Config> {
    return this.http.put<Config>(`${this.apiUrl}/${id}`, config);
  }

  deleteConfig(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}


