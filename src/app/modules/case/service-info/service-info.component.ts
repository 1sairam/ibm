import { ServiceInfo } from '../../../core/models/service-info';
import { Component, OnInit, Input } from '@angular/core';
import { ServiceInfoService } from '../../../core/services/service-info.service';
import { MatTableDataSource } from '@angular/material';
import { CaseInfo } from 'src/app/core/models/case-info';
import {MatDialog} from '@angular/material';
import { HsiaDialogComponent } from '../../../modules/dialogs/hsia-dialog/hsia-dialog.component';

@Component({
  selector: 'bbw-service-info',
  templateUrl: './service-info.component.html',
  styleUrls: ['./service-info.component.css']
})
export class ServiceInfoComponent implements OnInit {
 
  @Input()
  caseInfo:CaseInfo;
  isLoading=true;

  displayedColumns: string[] = ['Conne', 'Status', 'DSL Order ID'];

  public serviceInfo: ServiceInfo[]=[];
  dataSource = new MatTableDataSource<any>();

  selected=['None', 'Yes', 'No'];
  // selectedX="None";
  // selectedXs="Yes";
  // selectedXn="No";

  OtherInfoSelected=["Multi-User", "Y", "N", "Lease", "IP-CO", "144/144 Kbps"]
  // otherDrop="Single-User";
  // otherDrop1="Y";
  // otherDrop2="No";
  // otherDrop3="Lease";
  // otherDrop4="IP-CO";
  // otherDrop5="768/384 Kbps";

  OptionalInfo=["Subscribed ", '0', 'No', 'Static IP', 'NAT']
  optopnDrp="0";
  optopnDr1="No";
  //selectedTyp:ServiceInfo;
  //selectedRow: number;


  selectedServerInfo : any= {
    "providerOrderId": "",
    "providerOrderStatus":"",
    "dslProvider":"",
    "providerCktNumber":"",
    "soegRequestId":"",
    "dryLoopInd":"",
    "dslamType":"",
    "uban":"",
    "backhaulCircuitNumber":"",
    "lanEndUserIp":"",
    "lanSubnet":"",
    "lanProtocol":"",
    "lanCustomerPvc":"",
    "wanEndUserIp":"",
    "wanSubnet":"",
    "wanProtocol":"",
    "wanBroadcastIp":"",
    "linesplitType":"None",
    "lineShared":"Yes",
    "remoteWorkerInd":"No",
    "offerProduct":"Multi-User",
    "hsiaIndicator":"N",
    "hsiaHeldOrdInd":"",
    "serviceClass":"Basic",
    "networkTransportType":"",
    "accessSpeed":"144/144 Kbps",

  }

  

  constructor(public dialog: MatDialog,private _serviceInfoService : ServiceInfoService) {
    //this.selectedRow=0;
   }

  ngOnInit() {
    this._serviceInfoService.getServiceInfoData(this.caseInfo.caseId).subscribe(data => {
      this.isLoading=false;
      this.serviceInfo = this.dataSource.data= data;
      if(this.serviceInfo != undefined && this.serviceInfo.length>0)
        this.selectedServerInfo = this.serviceInfo[0];
    },error=>{
      this.isLoading=false;
    }
  );
  }
setClickedRow(row){
    this.selectedServerInfo = row;
}

hsiaModal(){

  if(this.selectedServerInfo == undefined || this.selectedServerInfo == null){
    return;
  }

  const dialogRef = this.dialog.open(HsiaDialogComponent,  {
    width: '85%',
    height : '81%',
    data: {"hsiaInfo" : this.selectedServerInfo}
  }
  );
}

}
