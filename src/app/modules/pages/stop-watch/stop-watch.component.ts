import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, Subject, timer } from 'rxjs';
import { filter, mapTo, scan, switchMap, takeUntil } from 'rxjs/operators';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'bs-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.scss'],
  encapsulation  : ViewEncapsulation.None,
})
export class StopWatchComponent implements OnInit {

  time$: Observable<number>;
  percent$: Observable<number>;
  start$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  interval$: Observable<number>;
  reset$: Subject<void> = new Subject<void>();
  destroyed$: Subject<void> = new Subject<void>();

  constructor(
    private _timerService: TimerService, 
    private _changeDetectorRef: ChangeDetectorRef) {  
  }

  /**
   * Initialization and subscribe to stopwatch event.
   */
  ngOnInit(): void {
    this._timerService.mode = 'stop-watch';
    this.interval$ = timer(0, 10);
    this.resetTimer();
    
    this._timerService.stopwatchReset$.subscribe(() => {
      this.resetTimer();
      this._timerService.doStop();
      this._changeDetectorRef.markForCheck();
    });
  }

  /**
   * Destroy observables.
   */
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  /**
   * Reset the stop watch.
   */
  resetTimer() {
    this.reset$.next();

    this.time$ = this._timerService.stopwatchStart$.pipe(
      filter(() => this._timerService.mode === 'stop-watch'),
      switchMap(start => (start ? this.interval$.pipe(mapTo(10)) : EMPTY)),
      scan((acc, val) => acc + val, 0),
      takeUntil(this.reset$)
    );
  }
}
