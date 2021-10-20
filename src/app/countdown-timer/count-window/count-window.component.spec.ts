import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountWindowComponent } from './count-window.component';

describe('CountWindowComponent', () => {
  let component: CountWindowComponent;
  let fixture: ComponentFixture<CountWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
