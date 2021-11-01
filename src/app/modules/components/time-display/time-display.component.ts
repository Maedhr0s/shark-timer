import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { TimerService } from '../../services/timer.service';
import { Utils } from '../../services/utils.service';

@Component({
  selector: 'bs-time-view',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss'],
  encapsulation  : ViewEncapsulation.None,
})
export class TimeDisplayComponent implements OnInit, OnDestroy {
  private _hourInMs = 3600000;
  private _minuteInMs = 60000;
  private _secondInMs = 1000;

  @Input() percent: number = 0;  
  @Input() time: number = (12 * this._hourInMs) + (34 * this._minuteInMs) + (56 * 1000) + 780;  
  @Output() setTime = new EventEmitter<number>();
  @Input() canSetTime: boolean = false;
  @Input() showHundriths: boolean = true;

  settingTime$ = new BehaviorSubject<boolean>(false);
  inputHours: number = 0;
  inputMinutes: number = 0;
  inputSeconds: number = 0;

  constructor(public timerService: TimerService) { }

  ngOnInit(): void {
  }
  
  /**
  * Destroy observables.
  */
  ngOnDestroy(): void
  {
  }

  /**
   * Update the current timer values.
   * @param hours 
   * @param minutes 
   * @param seconds 
   */
  onInputChange(hours: number, minutes: number, seconds: number) {
    const timeVal = hours * this._hourInMs + minutes * this._minuteInMs + seconds * this._secondInMs;
    console.log('timeVal',timeVal);
    this.setTime.emit(timeVal);
  }

  /**
   * Set default time.
   */
  onStartSetTime() {
    if (this.canSetTime) {
      this.settingTime$.next(true);
      this.inputHours = this.hours;
      this.inputMinutes = this.minutes;
      this.inputSeconds = this.seconds;
    }
  }

  /**
   * Public properties.
   */
  get hours(): number {
    return Math.floor(this.time / this._hourInMs);
  }

  get hoursDigitTwo(): number {
    return Utils.digitTwo(this.hours);
  }
  get hoursDigitOne(): number {
    return Utils.digitOne(this.hours);
  }

  get minutes(): number {
    return Math.floor((this.time / this._minuteInMs) % 60);
  }

  get minutesDigitTwo(): number {
    return Utils.digitTwo(this.minutes);
  }
  get minutesDigitOne(): number {
    return Utils.digitOne(this.minutes);
  }

  get seconds(): number {
    return Math.floor((this.time / this._secondInMs) % 60);
  }

  get secondsDigitTwo(): number {
    return Utils.digitTwo(this.seconds);
  }
  get secondsDigitOne(): number {
    return Utils.digitOne(this.seconds);
  }

  get cSeconds(): number {
    return Math.floor((this.time / 10) % 100);
  }

  get cSecondsDigitTwo(): number {
    return Utils.digitTwo(this.cSeconds);
  }
  get cSecondsDigitOne(): number {
    return Utils.digitOne(this.cSeconds);
  }
}
