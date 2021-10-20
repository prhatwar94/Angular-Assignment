import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-count-window',
  templateUrl: './count-window.component.html',
  styleUrls: ['./count-window.component.css']
})
export class CountWindowComponent implements OnInit,OnChanges {
 
  @Input()
  startCount!: number;
  @Input()
  pauseCount!: number;
  
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
 
  }

  ngOnInit(): void {
  }

}
