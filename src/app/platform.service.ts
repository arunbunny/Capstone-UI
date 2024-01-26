// login.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlatformService {
  private apiUrl = 'http://localhost:3006'; 

  constructor(private http: HttpClient) {}

  login(body: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, body);
  }

  register(body:any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register-user`, body);
  }


}