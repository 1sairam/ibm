import { Component, OnInit, Input } from '@angular/core';
import { UserInfo } from '../models/user-info';

@Component({
  selector: 'bbw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Input() userInfo : UserInfo;
  
  ngOnInit() {
  }

  invalidateSession(){
    location.href="./invalidateSession";
  }

}
