import { Component, OnInit,Type,EventEmitter,Output } from '@angular/core';
import {Comp2Component} from '../comp2/comp2.component';
import {Comp3Component} from '../comp3/comp3.component';


@Component({
  selector: 'bbw-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  
  component :Type<any> = Comp1Component;
  @Output() changeToComponent = new EventEmitter<Type<any>>();
  constructor() { }

  ngOnInit() {
  }
  
  changeComp(action:string){
    if(action == "comp3"){
      this.component = Comp3Component;
    }
    else if(action == "comp2"){
    this.component = Comp2Component;
    }else{
      this.component = Comp2Component;
    }
    this.changeToComponent.emit(this.component);
  }


}
