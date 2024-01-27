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

  registerLand(body:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/register-land`, body)
  }

  getBuyerRequests(id:any){
    return this.http.get(`${this.apiUrl}/get-my-request?ownerid=`+id)
  }

  updateRequest(req:any){
    return this.http.post(`${this.apiUrl}/approve-land-request`, req)
  }

  raiseLandRequest(req:any){
    return this.http.post(`${this.apiUrl}/raise-land-request`, req)
  }

  getLands(){
    return this.http.get(`${this.apiUrl}/get-all-lands`)
  }


}
