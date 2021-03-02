import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getUsersList(): Observable<any> {
    return this.http.get('https://reqres.in/api/users');
  }

  public getUserById(id: number): Observable<any> {
    return this.http.get(`https://reqres.in/api/users/${id}`);
  }

  public saveUser(body: any, id: number): Observable<any> {
    if (id) {
      return this.http.put(`https://reqres.in/api/users/${id}`, body);
    } else {
      return this.http.post(`https://reqres.in/api/users`, body);
    }
  }

  public deleteUserById(id: number): Observable<any> {
    return this.http.delete(`https://reqres.in/api/users/${id}`);
  }

}
