import { Component, OnInit } from '@angular/core';
export interface Numbers{
  number:Number
}
@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.css']
})
export class DynamicDivComponent implements OnInit {

// numbers = Array.from({length: 100000}).map((_, i) => i);
post:Array<number>[]=[];
numbers:any=[];
  constructor() { }


  ngOnInit(): void {
    for(let i:number=100;i<=10;i++){
      this.numbers.push(i);
    }
  }

  onButtonClick(number:Number){
    alert("Button in "+number+" div  clicked ");
   
  }

  onScroll(){
    const length=this.numbers.length;
    setTimeout(() => {
      const p:any=' '.repeat(100).split('').map((s,i)=>i+1+length);
        while(p.length)
        this.numbers.push(p.shift());
    }, 100);
  }

}
