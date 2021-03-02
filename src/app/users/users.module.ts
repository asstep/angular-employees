import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersListComponent} from './users-list/users-list.component';
import {UserEditComponent} from './user-edit/user-edit.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    // UserEditComponent,
    // UsersListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class UsersModule { }
