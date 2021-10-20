import { Component, Input, OnInit } from '@angular/core';

import { Log } from 'src/app/core/model/model';

@Component({
  selector: 'app-log-window',
  templateUrl: './log-window.component.html',
  styleUrls: ['./log-window.component.css']
})
export class LogWindowComponent implements OnInit {
  @Input()
  dateLog!: Log[]; 
  constructor() { }

  ngOnInit(): void {
    
  }

}
