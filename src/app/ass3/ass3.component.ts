import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ass3',
  templateUrl: './ass3.component.html',
  styleUrls: ['./ass3.component.css']
})
export class Ass3Component implements OnInit {
  toggleSwitch:string='visible';
  clickCount:number=0;
  clickArray:number[]=[];
  
  constructor() { }

  buttonToggle(){
    this.clickCount+=1;
    this.clickArray.push(this.clickCount)
    this.toggleSwitch=='visible' ? this.toggleSwitch='hidden' : this.toggleSwitch='visible';
  }

  ngOnInit(): void {
  }

}
