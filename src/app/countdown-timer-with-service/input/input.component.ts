import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PauseTime } from 'src/app/core/model/model';
import { CountdownService } from 'src/app/core/service/countdown.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private countDownService:CountdownService,private formbuilder:FormBuilder) { }

  timerForm!: FormGroup;
  isStartEvent: boolean = true;
  timeInputDisable:boolean=false;
  isPauseEvent = false;
  time: any;
  isDisabled:boolean=true;
  @Input()
  pauseTime!: PauseTime[];

 


  ngOnInit() {
    this.initiateTimerForm();
  } 
  initiateTimerForm(){
    this.timerForm=this.formbuilder.group({
      'time':new FormControl(null)
    })
  }

  // onStart(timeInput: string) {
  //   this.isStartEvent = false;    
  //   this.onTimerEvent({ event: 'start', progressNum: timeInput });
  // }
  onStart() {
    // this.timerForm.controls.time.disable()
    this.timeInputDisable=true;
    const timeInput=this.timerForm.controls.time.value;
    this.isStartEvent = false;    
     this.onTimerEvent({ event: 'start', progressNum: timeInput });
  }
  onPause() {
    this.isStartEvent = true;
   this.onTimerEvent({ event: 'pause' });
  }
  // onReset() {   
  //   // this.timeInputDisable=false;
  //   // this.timerForm.reset();
  //   // this.timerForm.controls.time.enable();
  //   // this.isStartEvent = true;
  // }

  onResetBtn(){
    debugger;
  }

  onTimerEvent({
    event,
    progressNum
   
  }: {
    event: string;
    progressNum?: any;
   
  }) {
    this.countDownService.setData({ event, progressNum })
    // this.timerInput.emit({ event, progressNum });
  }




}
