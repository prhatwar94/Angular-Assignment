import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FloatingBannerComponent } from './floating-banner/floating-banner.component';
import { DynamicDivComponent } from './dynamic-div/dynamic-div.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountdownTimerWithServiceComponent } from './countdown-timer-with-service/countdown-timer-with-service.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { CountWindowComponent } from './countdown-timer/count-window/count-window.component';
import { LogWindowComponent } from './countdown-timer/log-window/log-window.component';
import { InputWindowComponent } from './countdown-timer/input-window/input-window.component';
import { TimerWindowComponent } from './countdown-timer/timer-window/timer-window.component';
import { TimerComponent } from './timer/timer.component';
import { HomeComponent } from './home/home.component';
import { CountComponent } from './countdown-timer-with-service/count/count.component';
import { InputComponent } from './countdown-timer-with-service/input/input.component';
import { LogComponent } from './countdown-timer-with-service/log/log.component';
import { TimerDisplayComponent } from './countdown-timer-with-service/timer-display/timer-display.component';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule,
  MatCardModule,
  MatGridListModule,
  MatSelectModule,
  MatTableModule,
  MatSortModule,
];
const COMPONENTS = [
  FloatingBannerComponent,
  DynamicDivComponent,
  CountdownTimerComponent,
  CountdownTimerWithServiceComponent,
  GridListComponent,
  StudentDataComponent,
  CountWindowComponent,
  LogWindowComponent,
  InputWindowComponent,
  TimerWindowComponent,
  TimerComponent,
  HomeComponent,
  CountComponent,
  InputComponent,
  LogComponent,
  TimerDisplayComponent,
];

@NgModule({
  declarations: [AppComponent, ...COMPONENTS],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    ...MATERIAL_MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
