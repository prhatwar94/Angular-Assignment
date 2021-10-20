import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-timer-window',
  templateUrl: './timer-window.component.html',
  styleUrls: ['./timer-window.component.css'],
})
export class TimerWindowComponent implements OnInit, OnChanges {
  
  timeCount: number = 0;
  @Input()
  timeLeft!: number;
  @Input()
  isPause!: boolean;
  @Input()
  isStart!: boolean;
 
  
  @Output() pauseTime = new EventEmitter();
  progressNum = 1000;
  progress!: string;
  isRunning = true;
  isComplete = false;

  interval: any;

  ngOnInit() {
    this.timeCount = this.timeLeft;
  }

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void { 
    if (this.isStart) {
      this.startTimer();
    }
    if (this.isPause) {
      this.pauseTimer();
    }
 
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeCount > 0) {
        this.timeCount--;
      } else {
        this.timeCount = this.timeLeft;
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
    this.pauseTime.emit(this.timeCount);
  }

}
