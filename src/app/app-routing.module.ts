import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeesComponent} from './employees/employees.component';
import {EditComponent} from './edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeesComponent },
  { path: 'create',
    component: EditComponent,
    data: {
      type: 'create'
    },
  },
  { path: 'edit/:id',
    component: EditComponent,
    data: {
      type: 'edit'
    },
  },
  { path: '**', redirectTo: '/employees', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
