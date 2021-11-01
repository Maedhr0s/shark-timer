import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlarmService } from '../../services/alarm.service';

import { TimeControllerComponent } from './time-controller.component';

export class MockAlarmService {
}

describe('TimeControllerComponent', () => {
  let component: TimeControllerComponent;
  let fixture: ComponentFixture<TimeControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeControllerComponent ],
      providers: [
        { provide: AlarmService, useClass: MockAlarmService },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
