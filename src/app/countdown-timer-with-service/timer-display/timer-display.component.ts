import { Component, OnInit } from '@angular/core';

import { CountdownService } from 'src/app/core/service/countdown.service';

@Component({
  selector: 'app-timer-display',
  templateUrl: './timer-display.component.html',
  styleUrls: ['./timer-display.component.css']
})
export class TimerDisplayComponent implements OnInit {

  constructor(private countDownService:CountdownService) { }
  timeCount: number = 0;
  timeLeft:number=0;
  interval: any;
  ngOnInit(): void { 
    const data=this.countDownService.timerSubject.subscribe(res=>{
      this.timeLeft=res.progressNum;  
      if(res.event==='start'){
        this.startTimer();
      }
      if(res.event==='pause'){
        this.pauseTimer();
      }
    });
    this.timeCount =this.timeLeft ;
  }

  startTimer(){      
    this.interval = setInterval(() => {
      if (this.timeCount > 0) {
        this.timeCount--;
      } else {
        this.timeCount = this.timeLeft;
      }
    }, 1000);
  }

  pauseTimer() {   
    this.countDownService.pauseSubject.next({event:'pause',progressNum:this.timeCount})   
    clearInterval(this.interval);
  
  }



}
