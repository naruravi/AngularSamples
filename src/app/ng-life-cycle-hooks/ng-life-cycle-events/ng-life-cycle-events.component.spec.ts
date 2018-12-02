import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgLifeCycleEventsComponent } from './ng-life-cycle-events.component';

describe('NgLifeCycleEventsComponent', () => {
  let component: NgLifeCycleEventsComponent;
  let fixture: ComponentFixture<NgLifeCycleEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgLifeCycleEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgLifeCycleEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
