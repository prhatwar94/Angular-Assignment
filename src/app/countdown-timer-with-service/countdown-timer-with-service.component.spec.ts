import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerWithServiceComponent } from './countdown-timer-with-service.component';

describe('CountdownTimerWithServiceComponent', () => {
  let component: CountdownTimerWithServiceComponent;
  let fixture: ComponentFixture<CountdownTimerWithServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownTimerWithServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerWithServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
