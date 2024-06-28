import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 private baseURL = "http://localhost:8080/api/v1/users";

  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  createEmployee(employee: User): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee: User): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}