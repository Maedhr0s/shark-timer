import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlarmService } from '../../services/alarm.service';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'bs-time-controller',
  templateUrl: './time-controller.component.html',
  styleUrls: ['./time-controller.component.scss']
})
export class TimeControllerComponent extends AlarmService implements OnInit, OnDestroy {
  timerService: TimerService
  constructor(
      private _timerService: TimerService, 
    ) { 
    super();
    this.timerService = _timerService; 
  }

  /**
   * Initialization and subscription
   */
  ngOnInit(): void {
    this.initAlarm();
    this._timerService.timerEnd$.subscribe((isCompleted) => {
      if (isCompleted) {
        console.log('isCompleted');
        this.doPlayAlarm();
      }
    });
  }

  ngOnDestroy(): void {
    this.doStopAlarm();
  }

  /**
   * Timer and Stop Watch commands.
   */
  onStart(): void {
    this._timerService.doStartStop();
  }

  onStop(): void {
    this._timerService.doStop();
  }

  onReset(): void {
    this.onStopAlarm();
    this._timerService.doReset();
  }

  onToggleAlarm(): void {
    this.isAlarmEnabled = !this.isAlarmEnabled;
  }

  onStopAlarm(): void {
    this._timerService.doReset();
    this.doStopAlarm();
  }

}
