import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'student', loadChildren: './student/student.module#StudentModule' },
  { path: 'employee', loadChildren: './employee/employee.module#EmployeeModule' },
  { path: 'hooks', loadChildren: './ng-life-cycle-hooks/ng-life-cycle-hooks.module#NgLifeCycleHooksModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
