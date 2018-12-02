import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'

import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { StudentListComponent } from './studentList/studentList.component';

const routes: Routes = [
  { path: '', component: StudentListComponent },
  { path: 'create', component: CreateComponent },
  { path: 'update', component: UpdateComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [CreateComponent, UpdateComponent, StudentListComponent]
})
export class StudentModule { }
