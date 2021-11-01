import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  template: ''
})
export class AlarmService {
  @ViewChild('timerAlarm', { static: true }) audioPlayer: ElementRef;
  @Output() playEvent = new EventEmitter();
  @Output() stopEvent = new EventEmitter();
  
  isAlarmLoaded: boolean = false;
  isAlarmPlaying: boolean = false;
  isAlarmEnabled: boolean = true;

  constructor() { }

  /**
   * Initialize the alarm audio for playback.
   */
  initAlarm(): void {
    this.audioPlayer.nativeElement.addEventListener('loadeddata', () => {
      this.isAlarmLoaded = true;
    });
  }

  /**
   * Play the alarm if enabled.
   * @returns 
   */
  doPlayAlarm() {
    if (!this.isAlarmEnabled) return;
    this.isAlarmPlaying = true;
    setTimeout(() => {
      this.audioPlayer.nativeElement.play();
      this.playEvent.emit();
     }, 0);
  }

  /**
   * Stop the alarm.
   * @returns 
   */
  doStopAlarm() {
    if (!this.isAlarmEnabled) return;
    this.isAlarmPlaying = false;
    setTimeout(() => {
      this.audioPlayer.nativeElement.pause();
      this.stopEvent.emit();
     }, 0);
  }
}
