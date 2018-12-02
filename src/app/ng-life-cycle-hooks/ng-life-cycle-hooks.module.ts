import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgLifeCycleEventsComponent } from './ng-life-cycle-events/ng-life-cycle-events.component';

const routes: Routes = [
  { path: '', component: NgLifeCycleEventsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NgLifeCycleEventsComponent]
})
export class NgLifeCycleHooksModule { }
