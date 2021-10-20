import { Component, OnInit } from '@angular/core';
import { CountdownService } from 'src/app/core/service/countdown.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor(private countDownService:CountdownService) { }

  ngOnInit(): void {
  }

}
