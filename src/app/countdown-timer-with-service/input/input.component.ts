import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { PauseTime } from 'src/app/core/model/model';
import { CountdownService } from 'src/app/core/service/countdown.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  constructor(
    private countDownService: CountdownService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}

  timerForm!: FormGroup;
  isStartEvent: boolean = true;
  timeInputDisable: boolean = false;
  isPauseEvent = false;
  time: any;
  isDisabled: boolean = true;

  pauseTime: PauseTime[] = [];

  ngOnInit() {
    this.initiateTimerForm();
    this.countDownService.pauseSubject.subscribe((res) => {
      if (res.event === 'pause') {
        this.pauseTime.push({ pauseTime: res.progressNum });
      }
    });
  }
  initiateTimerForm() {
    this.timerForm = this.formbuilder.group({
      time: new FormControl(null, Validators.required),
    });
  }

  onStart() {
    this.timerForm.controls.time.disable();
    this.timeInputDisable = true;
    const timeInput = this.timerForm.controls.time.value;
    this.isStartEvent = false;
    this.onTimerEvent({ event: 'start', progressNum: timeInput });
  }
  onPause() {
    this.isStartEvent = true;
    this.onTimerEvent({ event: 'pause' });
  }

  onResetBtn() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  onTimerEvent({ event, progressNum }: { event: string; progressNum?: any }) {
    this.countDownService.setData({ event, progressNum });
  }
}
