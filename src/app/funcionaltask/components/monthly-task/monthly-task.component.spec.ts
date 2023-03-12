import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyTaskComponent } from './monthly-task.component';

describe('MonthlyTaskComponent', () => {
  let component: MonthlyTaskComponent;
  let fixture: ComponentFixture<MonthlyTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
