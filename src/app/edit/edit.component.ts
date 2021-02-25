import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
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
      const saveMethod = this.service.saveEmployee(this.form.value, this.id).subscribe(
      (res) => {
        alert(res.message);
        // this.router.navigate(['/']);
      }, (err) => {
        alert('Error');
      });
  }
}
