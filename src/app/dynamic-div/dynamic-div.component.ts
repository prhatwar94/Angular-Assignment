import { AfterViewInit, Component, ContentChild, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.css']
})
export class DynamicDivComponent implements OnInit {
  @ViewChild('dynamicDiv')  
  dynamicDiv!: ElementRef;
  constructor(private elRef:ElementRef,private renderer: Renderer2) { }
  


  ngOnInit(): void {
   for(let i:number=1;i<=100;i++){
      this.createDivContainer(i);
   }
  }
 

  onButtonClick(number:Number){
    alert("Button in "+number+" div  clicked ");  
  }
  

  createDivContainer(i:number) {
    const buttonEle=this.renderer.createElement('button');
    const text=this.renderer.createText('Button '+i);
    this.renderer.appendChild(buttonEle,text);
     const dynamicDivContainer=this.elRef.nativeElement.querySelector('div')
    const divContainer = this.renderer.createElement('div');
    this.renderer.appendChild(dynamicDivContainer, divContainer);   
    this.renderer.setAttribute(divContainer, 'class',  'number');
    this.renderer.appendChild(divContainer,buttonEle);
    this.renderer.listen(buttonEle, 'click', (event) => {
      this.onButtonClick(i);
   })
    return divContainer;
  }
}
