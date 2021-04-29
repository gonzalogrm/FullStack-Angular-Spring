import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //Endpoint del Backend
  private backendURL: string = "http://localhost:8080/fullstack/users";
  
  constructor(
    //HttpClient para proporcionar métodos que reciben datos del backend
    private httpClient: HttpClient
    ) { }

  //Methods
  //Para cada uno de ellos usamos uno de los métodos request HTTP
  //GET
  findAllUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.backendURL}`);
  }

  getUserById(id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.backendURL}/${id}`);
  }

  //POST
  createUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.backendURL}`, user);
  }

  //PUT
  updateUser(id: number, user: User): Observable<Object>{
    return this.httpClient.put(`${this.backendURL}/${id}`, user);
  }

  //DELETE
  deleteUser(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.backendURL}/${id}`);
  }
}
