import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerWindowComponent } from './timer-window.component';

describe('TimerWindowComponent', () => {
  let component: TimerWindowComponent;
  let fixture: ComponentFixture<TimerWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
