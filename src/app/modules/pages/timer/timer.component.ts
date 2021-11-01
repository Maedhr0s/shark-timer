import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, Subject, timer } from 'rxjs';
import { filter, map, mapTo, scan, startWith, switchMap, takeUntil, takeWhile, tap } from 'rxjs/operators';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'bs-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  encapsulation  : ViewEncapsulation.None,
})
export class TimerComponent implements OnInit, OnDestroy {
  
  time$: Observable<number>;
  percent$: Observable<number>;
  start$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  interval$: Observable<number>;
  reset$: Subject<void> = new Subject<void>();
  destroyed$: Subject<void> = new Subject<void>();


  startTime: number = 5 + 1000 * 60 * 1;
  constructor(
    private _timerService: TimerService, 
    private _changeDetectorRef: ChangeDetectorRef) {  
  }

  /**
   * Initialization
   */
  ngOnInit(): void {
    this.interval$ = timer(0, 10);

    this._timerService.timerReset$.subscribe(() => {
      this.resetTimer(this.startTime);
      this._timerService.doStop();
      this._changeDetectorRef.markForCheck();
    });
  }

  /**
  * Destroy observables.
  */
  ngOnDestroy(): void
  {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  /**
   * Reset the timer value.
   * @param startTime 
   */
  resetTimer(startTime: number) {
    this._timerService.mode = 'timer';
    this.reset$.next();
    this._timerService.doEnd(false);

    this.time$ = this._timerService.timerStart$.pipe(
      filter(() => this._timerService.mode === 'timer'),
      switchMap(start => (start ? this.interval$.pipe(mapTo(10)) : EMPTY)),
      scan((acc, val) => acc - val, startTime),
      startWith(startTime),
      tap(val => {
        if (val <= 0) {
          this._timerService.doEnd(true);
        }
      }),
      takeUntil(this.reset$),
      takeWhile(val => val >= 0),
    );
 
    this.percent$ = this.time$.pipe(
      map(time => (1 - time / startTime) * 100),
    );

    //Open the pipe.
    this.time$.subscribe(() => {});
   }    

   /**
    * Set the timer value.
    * @param startTime 
    */
  setTime(startTime: any) {
    console.log('startTime', startTime);
    this.startTime = startTime;
    this.resetTimer(this.startTime);
  }
}
