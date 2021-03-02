import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {EmployeeEditComponent} from './employee-edit/employee-edit.component';

export const employeesRoute: Routes = [
  {
    path: 'create',
    component: EmployeeEditComponent,
    data: {
      type: 'create'
    },
  },
  {
    path: 'edit/:id',
    component: EmployeeEditComponent,
    data: {
      type: 'edit'
    },
  },
];

@NgModule({
  declarations: [
    EmployeeEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(employeesRoute)
  ]
})
export class EmployeesModule { }
