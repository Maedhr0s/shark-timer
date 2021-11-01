import { ElementRef, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { TimerMode } from '../types/timer-mode.type';

@Injectable({
  providedIn: 'root'
})
export class TimerService implements OnInit {
  alarmElementRef: ElementRef;
 
  timerStart$ = new BehaviorSubject<boolean>(false);
  timerEnd$ = new BehaviorSubject<boolean>(false);
  timerReset$ = new BehaviorSubject<number>(0);

  stopwatchStart$ = new BehaviorSubject<boolean>(false);
  stopwatchReset$ = new Subject<void>();

  alarm: HTMLAudioElement;
  alarmEnabled$ = new BehaviorSubject<boolean>(true);
  alarmSounding$ = new BehaviorSubject<boolean>(false);

  fullScreen$ = new BehaviorSubject<boolean>(false);

  timerMode: TimerMode = 'timer';

  constructor() { }

  ngOnInit(): void {
    this.alarm = this.alarmElementRef.nativeElement;
  }

  /**
   * Start the timer or stop watch if note started yet. 
   */
  doStartStop() {
    if (this.mode === 'timer') {
      if (!this.timerEnd$.value) {
        this.timerStart$.next(!this.timerStart$.value);
      }
    } else {
      this.stopwatchStart$.next(!this.stopwatchStart$.value);
    }
  }

  /**
   * Start timer or stopwatch
   */
  doStart() {
    if (this.mode === 'timer') {
      this.timerStart$.next(true);
    } else {
      this.stopwatchStart$.next(true);
    }
  }

  /**
   * Stop the timer and stop watch
   */
  doStop() {
    if (this.mode === 'timer') {
      this.timerStart$.next(false);
    } else {
      this.stopwatchStart$.next(false);
    }
  }

  /**
   * Reset the timer or stop watch.
   */
  doReset() {
    if (this.mode === 'timer') {
      this.timerReset$.next(0);
    } else {
      this.stopwatchReset$.next();
    }
  }

  /**
   * End the timer and inform subscribe components.
   * @param timerComplete 
   */
  doEnd(timerComplete: boolean) {
    this.timerEnd$.next(timerComplete);
  }

  /** 
   * Check if the timer or stopwatch is started.
   */
  get isStarted() {
    return this.mode === 'timer' ? this.timerStart$.value : this.stopwatchStart$.value;
  }

  /** 
   * Check if the timer or stopwatch is ended.
   */
  get isEnded() {
    return this.mode === 'timer' && this.timerEnd$.value ;
  }

  get mode(): TimerMode { return this.timerMode; }
  set mode(timerMode: TimerMode) {
    this.timerMode = timerMode;
  }
}
