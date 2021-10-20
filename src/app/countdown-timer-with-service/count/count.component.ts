import { Component, OnInit } from '@angular/core';
import { CountdownService } from 'src/app/core/service/countdown.service';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  constructor(private countDownService:CountdownService) { }

  ngOnInit(): void {
  }

}
