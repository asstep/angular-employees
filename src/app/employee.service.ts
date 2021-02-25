import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getEmployees(): Observable<any> {
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
  }

  public getEmployeeById(id: number): Observable<any> {
    return this.http.get(`http://dummy.restapiexample.com/api/v1/employee/${id}`);
  }

  public saveEmployee(body: any, id: number): Observable<any> {
    if (id) {
      return this.http.put(`http://dummy.restapiexample.com/api/v1/update/${id}`, body);
    } else {
      return this.http.post('http://dummy.restapiexample.com/api/v1/create', body);
    }
  }

  public deleteEmployeeById(id: number): Observable<any> {
    return this.http.delete(`http://dummy.restapiexample.com/api/v1/delete/${id}`);
  }
}
