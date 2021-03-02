import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EmployeeEditComponent} from './employees/employee-edit/employee-edit.component';
import {UserEditComponent} from './users/user-edit/user-edit.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'employees',
    loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule),
  },
  {
    path: 'users/create',
    component: UserEditComponent,
    data: {
      type: 'create'
    },
  },
  {
    path: 'users/edit/:id',
    component: UserEditComponent,
    data: {
      type: 'edit'
    },
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
