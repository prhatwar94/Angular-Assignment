import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {

  constructor() { }

  timerSubject=new BehaviorSubject<{progressNum: number ; event: string; _date: string;isPauseEvent:boolean}>({progressNum: 0 , event: '', _date: '',isPauseEvent:false});
  pauseSubject=new BehaviorSubject<{event:string;progressNum: number}>({event:'',progressNum:0})
  setData(data:any){
     this.timerSubject.next(data);
  }

 
}
