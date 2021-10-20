import { Component, OnInit } from '@angular/core';
import { interval, NEVER, Subject } from 'rxjs';
import { scan, startWith, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
 private counterSubject: Subject<{pause?:boolean,counterValue?:number}>=new Subject();
 counter:any;
  constructor() { }

  ngOnInit(): void {
    this.initializeCounter();
    this.startCounter()
  }

  private initializeCounter(){
    this.counterSubject.pipe(
      startWith({pause:true,counterValue:0}),
      scan((acc,val)=>
         ({ ...acc, ...val })
      ),
      tap((state)=>{
        this.counter=state;
      }),
      switchMap((state)=>state.pause?NEVER:interval(1000).pipe(
        tap(val=>{
          if( state.counterValue){
            state.counterValue+=1;
            this.counter=state.counterValue;
          }
         
        })
      ))
    ).subscribe();
  }

  startCounter(){
    this.counterSubject.next({pause:false})
  }
  pauseCounter(){
    this.counterSubject.next({pause:true})
  }
  resetCounter(){
    this.counterSubject.next({counterValue:1})
  }
}
