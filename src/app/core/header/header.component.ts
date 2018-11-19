import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  userInfo = {
    "userName" : "Srinivasarao",
    "id":"ss139t",
    "objid":"268525973",
    "loginName":"dev_d_sa"
  };
  
  ngOnInit() {
  }

}
