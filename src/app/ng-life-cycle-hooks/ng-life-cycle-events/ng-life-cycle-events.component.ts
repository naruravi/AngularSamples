import {
  Component,
  OnInit,
  Input,
  OnChanges,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked,
  DoCheck
} from '@angular/core';

@Component({
  selector: 'app-ng-life-cycle-events',
  templateUrl: './ng-life-cycle-events.component.html',
  styleUrls: ['./ng-life-cycle-events.component.scss']
})
export class NgLifeCycleEventsComponent implements 
  OnInit,
  OnChanges,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked,
  DoCheck {

  hooksOrder: string[] = [];
  hooksOrderNumber: number = 0;
  @Input('hookInput') hookInput: string = "test";

  constructor() {
    this.hooksOrderNumber++;
    this.hooksOrder.push(`constructor: ${this.hooksOrderNumber++}`)
  }
  ngOnInit() {
    this.hooksOrder.push(`ngOnInit: ${this.hooksOrderNumber++}`)
  }
  ngOnChanges() {
    this.hooksOrder.push(`ngOnChanges: ${this.hooksOrderNumber++}`)
  }
  ngAfterViewInit() {
    this.hooksOrder.push(`ngAfterViewInit: ${this.hooksOrderNumber++}`)
  }
  ngAfterViewChecked() {
    this.hooksOrder.push(`ngAfterViewChecked: ${this.hooksOrderNumber++}`)
  }
  ngAfterContentInit() {
    this.hooksOrder.push(`ngAfterContentInit: ${this.hooksOrderNumber++}`)
  }
  ngAfterContentChecked() {
    this.hooksOrder.push(`ngAfterContentChecked: ${this.hooksOrderNumber++}`)
  }
  ngDoCheck() {
    this.hooksOrder.push(`DoCheck: ${this.hooksOrderNumber++}`)
  }
}
