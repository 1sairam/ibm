import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'bbw-activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.css']
})
export class ActivityLogComponent implements OnInit {

  @Output() changeToComponent = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
  }

  gotoMoreInfo(index){
    this.changeToComponent.emit(index);
  }

}
