import {
  Component,
  EventEmitter,
  Input,  
  OnInit,
  Output
  
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';

import { PauseTime } from 'src/app/core/model/model';

@Component({
  selector: 'app-input-window',
  templateUrl: './input-window.component.html',
  styleUrls: ['./input-window.component.css'],
})
export class InputWindowComponent implements OnInit {
  timerForm!: FormGroup;
  isStartEvent: boolean = true;
  timeInputDisable: boolean = false;
  isPauseEvent = false;
  time: any;
  isDisabled: boolean = true;
  @Input()
  pauseTime!: PauseTime[];
  @Output() timerInput = new EventEmitter();
  @Output() pauseEvent = new EventEmitter();
  constructor(private formbuilder: FormBuilder,private router:Router) {}

  ngOnInit() {
    this.initiateTimerForm();
  }
  /**Initialise timer Form */
  initiateTimerForm() {
    this.timerForm = this.formbuilder.group({
      time: new FormControl({value: '', disabled: this.timeInputDisable},Validators.required),
    });
  }

 /**On click of Start Buttton */
  onStart() {
    this.timerForm.controls.time.disable();
    this.timeInputDisable = true;
    const timeInput = this.timerForm.controls.time.value;
    this.isStartEvent = false;
    this.onTimerEvent({ event: 'start', progressNum: timeInput });
  }

  /**On click of Pause Buttton */
  onPause() {
    this.isStartEvent = true;
    this.onTimerEvent({ event: 'pause' });
  }
 
 /**On click of Reset Buttton */
  onResetBtn() {   
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }

  onTimerEvent({ event, progressNum }: { event: string; progressNum?: any }) {
    this.timerInput.emit({ event, progressNum });
  }
}
