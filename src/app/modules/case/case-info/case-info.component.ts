import { Component, OnInit, Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'bbw-case-info',
  templateUrl: './case-info.component.html',
  styleUrls: ['./case-info.component.css']
})
export class CaseInfoComponent implements OnInit {

  @Output() changeToComponent = new EventEmitter<number>();

  constructor() {

  }

  ngOnInit() {
  }

  changeComp(index){
    this.changeToComponent.emit(index);
  }


}
