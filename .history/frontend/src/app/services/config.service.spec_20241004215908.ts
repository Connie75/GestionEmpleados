import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from '../models/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private apiUrl = 'http://localhost:3000/config';

  constructor(private http: HttpClient) { }

  getConfigs(): Observable<Config[]> {
    return this.http.get<Config[]>(this.apiUrl);
  }

  createConfig(config: Config): Observable<Config> {
    return this.http.post<Config>(this.apiUrl, config);
  }


}
