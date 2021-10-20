import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountdownTimerWithServiceComponent } from './countdown-timer-with-service/countdown-timer-with-service.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { DynamicDivComponent } from './dynamic-div/dynamic-div.component';
import { FloatingBannerComponent } from './floating-banner/floating-banner.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { HomeComponent } from './home/home.component';
import { StudentDataComponent } from './student-data/student-data.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'route1', component: FloatingBannerComponent},
  {path:'route2', component: GridListComponent},
  {path:'route3', component: CountdownTimerComponent},
  {path:'route4', component: CountdownTimerWithServiceComponent},
  {path:'route5', component: StudentDataComponent},
  {path:'route6', component: DynamicDivComponent},
  {path:'',redirectTo:'home',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
