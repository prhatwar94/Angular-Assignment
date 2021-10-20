import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';

import { Student } from '../core/model/model';
import { HttpServiceService } from '../core/service/http-service.service';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css'],
})
export class StudentDataComponent implements OnInit {
  displayedColumns: string[] = [
    'studentId',
    'firstName',
    'phoneNumber',
    'emailAddress',
  ];
  dataSource: Student[] = [];
  sortedData: Student[] = [];
  constructor(private httpService: HttpServiceService) {}

  ngOnInit(): void {
    this.getStudentData();
  }
  sortData(sort: Sort) {
    const data = this.dataSource.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'studentId':
          return this.compare(a.studentId, b.studentId, isAsc);
        case 'firstName':
          return this.compare(
            a.firstName.toLocaleLowerCase(),
            b.firstName.toLocaleLowerCase(),
            isAsc
          );
        case 'phoneNumber':
          return this.compare(a.phoneNumber, b.phoneNumber, isAsc);
        case 'emailAddress':
          return this.compare(
            a.emailAddress.toLocaleLowerCase(),
            b.emailAddress.toLocaleLowerCase(),
            isAsc
          );
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  getStudentData() {
    this.httpService.fetchStudentData().subscribe((res) => {
      this.dataSource = res.students;
      this.sortedData = this.dataSource.slice();
    });
  }
}
