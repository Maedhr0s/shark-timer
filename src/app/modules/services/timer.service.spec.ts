import { TestBed } from '@angular/core/testing';

import { TimerService } from './timer.service';

describe('TimerService', () => {
  let service: TimerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerService);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should start the timer.',
    (done: DoneFn) => {
      service.mode = 'timer';
      service.doStartStop();
      service.timerStart$.subscribe(value => {
        console.log('test', value);
        expect(value).toBeTrue();
        done();
      });
  });

  it('Should start the stop watch.',
    (done: DoneFn) => {
      service.mode = 'stop-watch';
      service.doStartStop();
      service.stopwatchStart$.subscribe(value => {
        console.log('test', value);
        expect(value).toBeTrue();
        done();
      });
  });

  it('Should stop the timer.',
    (done: DoneFn) => {
      service.mode = 'timer';
      service.doStop();
      service.timerStart$.subscribe(value => {
        expect(value).toBeFalse();
        done();
      });
  });  

  it('Should end the stop-watch.',
  (done: DoneFn) => {
    service.mode = 'stop-watch';
    service.doStop();
    service.stopwatchStart$.subscribe(value => {
      expect(value).toBeFalse();
      done();
    });
  });

  it('Should reset the timer.',
  (done: DoneFn) => {
    service.mode = 'timer';
    service.doReset();
    service.timerReset$.subscribe(value => {
      expect(value).toBe(0);
      done();
    });
  });
});
