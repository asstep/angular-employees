import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UsersService} from '../../services/users.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-users-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  public id: number;
  public type: string;
  public form: FormGroup;

  constructor(
    private service: UsersService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.route.data.subscribe((res) => this.type = res.type);
    this.route.params.subscribe((res) => this.id = res.id);

    this.form = fb.group({
      id: [null],
      first_name: [null],
      last_name: [null],
      email: [null],
      avatar: [null]
    });
  }

  ngOnInit(): void {
    if (this.type === 'edit') {
      this.service.getUserById(this.id).subscribe((res) => this.form.setValue(res.data));
    }
  }

  public onSubmit(): void {
    console.log(this.form.value);
    this.service.saveUser(this.form.value, this.id).subscribe(
      (res) => {
        alert('Success');
        this.router.navigate(['/']);
      }, (err) => {
        alert('Error');
      });
  }

}
