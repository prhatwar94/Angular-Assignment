import { Component, OnInit } from '@angular/core';
import { Log } from 'src/app/core/model/model';
import { CountdownService } from 'src/app/core/service/countdown.service';


@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css'],
})
export class LogComponent implements OnInit {
  dateLog: Log[] = [];
  constructor(private countDownService: CountdownService) {}

  ngOnInit(): void {
    this.countDownService.timerSubject.subscribe((res) => {
      if (res.event == 'start' || res.event == 'pause') {
        this.dateLog.push({ event: res.event, date: new Date() });
      }
    });
  }
}
