import { Component, OnInit } from '@angular/core';
import { Log, PauseTime } from '../core/model/model';
import { CountdownService } from '../core/service/countdown.service';

@Component({
  selector: 'app-countdown-timer-with-service',
  templateUrl: './countdown-timer-with-service.component.html',
  styleUrls: ['./countdown-timer-with-service.component.css']
})
export class CountdownTimerWithServiceComponent implements OnInit {
  time:any; 
  count:number =0;
  startCount:number=0;
  pauseCount:number=0;
  clickCount:number=0; 
  pauseTime:PauseTime[]=[]; 
  isStart:boolean=false;
  isPause:boolean=false;  
  dateLog:Log[]=[]
  // timeLeft: number = 60;
  // interval:any; 
  // constructor() { }

  // ngOnInit(): void {
  // }

  // startTimer() {
  //   this.interval = setInterval(() => {
  //     if(this.timeLeft > 0) {
  //       this.timeLeft--;
  //     } else {
  //       this.timeLeft = 60;
  //     }
  //   },1000)
  // }

  // pauseTimer() {
  //   clearInterval(this.interval);
  // }
  constructor(private countDownService:CountdownService) { }
  ngOnInit() {
    this.countDownService.timerSubject.subscribe(res=>{
      this.setTimerInput(res);
    })
     }



     setTimerInput(event: { progressNum: number ; event: string; _date: string;isPauseEvent:boolean }){     
      if(event.event==='start'){
        debugger;
        this.isStart=true;
        this.isPause=false;
        this.startCount+=1;
        this.dateLog.push({event:event.event,date:new Date()})
      }
      if(event.event==='pause'){
        debugger;
        this.isStart=false;
        this.isPause=true;
        this.pauseCount+=1;
        this.dateLog.push({event:event.event,date:new Date()})
      }    
      this.count=event.progressNum;
    }
    pauseEvent(isPause:boolean){ 
      this.isPause=isPause;    
    }
  
    onPauseTime(pauseTime:number){    
      console.log(pauseTime);
      this.pauseTime.push({pauseTime:pauseTime});
    }

}
