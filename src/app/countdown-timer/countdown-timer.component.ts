import { Component, OnInit } from '@angular/core';
import { Log, PauseTime } from '../core/model/model';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css'],
})
export class CountdownTimerComponent implements OnInit {
  time: any;
  count: number = 0;
  startCount: number = 0;
  pauseCount: number = 0;
  clickCount: number = 0;
  pauseTime: PauseTime[] = [];
  isStart: boolean = false;
  isPause: boolean = false;

  dateLog: Log[] = [];
  constructor() {}

  ngOnInit(): void {}

  setTimerInput(event: {
    progressNum: number;
    event: string;
    _date: string;
    isPauseEvent: boolean;
  }) {
    if (event.event === 'start') {
      this.isStart = true;
      this.isPause = false;
      this.startCount += 1;
      this.dateLog.push({ event: event.event, date: new Date() });
    }
    if (event.event === 'pause') {
      this.isStart = false;
      this.isPause = true;
      this.pauseCount += 1;
      this.dateLog.push({ event: event.event, date: new Date() });
    }
    this.count = event.progressNum;
  }
  pauseEvent(isPause: boolean) {
    this.isPause = isPause;
  }

  onPauseTime(pauseTime: number) {
    this.pauseTime.push({ pauseTime: pauseTime });
  }
}
