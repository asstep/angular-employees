import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

export interface IemployeesList {
  id: number;
  employee_name: string;
  employee_age: number;
  employee_salary: number;
  profile_image: string;
}

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public employeesList: Array<IemployeesList> = [];
  public displayedColumns: string[] = ['id', 'employee_name', 'employee_age', 'employee_salary', 'profile_image', 'actions'];

  constructor(
    public service: EmployeeService
  ) { }

  ngOnInit(): void {
    this.service.getEmployees().subscribe((res) => this.employeesList = res.data);
  }

  public deleteEmployee(element): void {
    const id = element.id;
    const conf = confirm('Are you sure?');

    if (conf) {
      this.service.deleteEmployeeById(id)
        .subscribe(
          (res) => {
            alert(res.message ?? 'success');
          }, (err) => {
            alert('Error');
          }
        );
    }
  }

}
