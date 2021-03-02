import { Component, OnInit } from '@angular/core';
import {IemployeesList} from '../../employees/employees-list/employees-list.component';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  public usersList: Array<any> = [];
  public displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'avatar', 'actions'];

  constructor(
    public service: UsersService
  ) { }

  ngOnInit(): void {
    this.service.getUsersList().subscribe((res) => this.usersList = res.data);
  }

  public deleteUser(id): void {
    const conf = confirm('Are you sure?');

    if (conf) {
      this.service.deleteUserById(id)
        .subscribe(
          (res) => {
            alert('Success');
          }, (err) => {
            alert('Error');
          }
        );
    }
  }

}
