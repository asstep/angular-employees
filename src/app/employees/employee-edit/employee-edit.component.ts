import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  public id: number;
  public type: string;
  public form: FormGroup;

  constructor(
    private service: EmployeeService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.route.data.subscribe((res) => this.type = res.type);
    this.route.params.subscribe((res) => this.id = res.id);

    this.form = fb.group({
      id: [null],
      employee_name: [null],
      employee_salary: [null],
      employee_age: [null],
      profile_image: [null]
    });
  }

  ngOnInit(): void {
    if (this.type === 'edit') {
      this.service.getEmployeeById(this.id).subscribe((res) => this.form.setValue(res.data));
    }
  }

  public onSubmit(): void {
    this.service.saveEmployee(this.form.value, this.id).subscribe(
      (res) => {
        alert(res.message ?? 'Success');
        // this.router.navigate(['/']);
      }, (err) => {
        alert('Error');
      });
  }
}
