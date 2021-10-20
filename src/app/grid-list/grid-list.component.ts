import { Component, OnInit } from '@angular/core';

import { Filter, Product } from '../core/model/model';
import { HttpServiceService } from '../core/service/http-service.service';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css'],
})
export class GridListComponent implements OnInit {
  layout: any;
  selectedVal = 'grid';
  products:Product[]=[]; 
  filterOptiom: Filter[] = [
    { value: 'Low', viewValue: 'Low to High' },
    { value: 'High', viewValue: 'High to Low' },
  ];
  constructor(private httpService: HttpServiceService) {}

  ngOnInit(): void {
    this.getProductList();
  }
  onValChange(value: string): void {
    this.layout = value;
  }

  onSelect(value: any) {
    if (value === 'High') {
      this.products.sort((item1, item2) => {
        return item2.price - item1.price;
      });
    } else {
      if (value === 'Low') {
        this.products.sort((item1, item2) => {
          return item1.price - item2.price;
        });
      } else {
        return;
      }
    }
  }

  getProductList(){
    this.httpService.fetchProducts().subscribe(res=>{
      this.products=res.products;
    })
  }
}
