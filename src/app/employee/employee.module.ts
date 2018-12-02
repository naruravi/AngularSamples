import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import {FormsModule} from '@angular/forms'

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { CalendarModule,DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { EventLogComponent } from './eventlog.component';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'create', component: CreateComponent },
  { path: 'update', component: UpdateComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule, CalendarModule, ButtonsModule, DialogModule,
    DateInputsModule,TooltipModule,FormsModule
  ],
  declarations: [EventLogComponent,EmployeeListComponent, CreateComponent, UpdateComponent]
})
export class EmployeeModule { }
