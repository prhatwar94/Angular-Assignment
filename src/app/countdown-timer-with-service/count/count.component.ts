import { Component, OnInit } from '@angular/core';

import { CountdownService } from 'src/app/core/service/countdown.service';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
   startCount:number=0;
   pauseCount:number=0;
  constructor(private countDownService:CountdownService) { }

  ngOnInit(): void {
    this.countDownService.timerSubject.subscribe(res=>{
      if(res.event==='start'){
        this.startCount+=1;
      }
      if(res.event==='pause'){
        this.pauseCount+=1;
      }
    })
  }

}
