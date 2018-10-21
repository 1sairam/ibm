import { Component, OnInit,EventEmitter,Output ,Type } from '@angular/core';
import {Comp1Component} from '../comp1/comp1.component';

@Component({
  selector: 'bbw-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
  @Output() changeToComponent = new EventEmitter<Type<any>>();
  constructor() { }

  ngOnInit() {
  }

  changeComp(action:string){
    this.changeToComponent.emit(Comp1Component);
  }

}
