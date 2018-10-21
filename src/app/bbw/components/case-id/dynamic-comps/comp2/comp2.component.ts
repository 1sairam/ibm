import { Component, OnInit,EventEmitter,Output ,Type } from '@angular/core';
import {Comp1Component} from '../comp1/comp1.component';

@Component({
  selector: 'bbw-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  @Output() changeToComponent = new EventEmitter<Type<any>>();

  constructor() { }

  ngOnInit() {
  }

  changeComp(action:string){
    this.changeToComponent.emit(Comp1Component);
  }
}
