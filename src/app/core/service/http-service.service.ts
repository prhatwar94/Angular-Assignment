import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, Student } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  fetchStudentData() {  
  return  this.http
      .get<{ students: Student[] }>('../assets/data/students.json')
      
  }

  fetchProducts(){
    return  this.http
    .get<{ products: Product[] }>('../assets/data/products.json');
  }
}
