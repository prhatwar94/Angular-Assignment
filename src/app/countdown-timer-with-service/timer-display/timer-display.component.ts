import { Component, OnInit } from '@angular/core';
import { CountdownService } from 'src/app/core/service/countdown.service';

@Component({
  selector: 'app-timer-display',
  templateUrl: './timer-display.component.html',
  styleUrls: ['./timer-display.component.css']
})
export class TimerDisplayComponent implements OnInit {

  constructor(private countDownService:CountdownService) { }

  ngOnInit(): void {
  }

}
