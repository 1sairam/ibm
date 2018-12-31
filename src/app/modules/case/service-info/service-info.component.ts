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
 
  quantity:number;
  serviceFrom:any;
  serviceTo:any;

  @Input()
  caseInfo:CaseInfo;

  isLoading=true;

  displayedColumns: string[] = ['Conne', 'Status', 'DSL Order ID'];
  displayedColumns2: string[] = ['Subscribed', 'Quantity'];
  displayedColumns3: string[] = ['Options'];

  public serviceInfo: ServiceInfo[]=[];
  dataSource = new MatTableDataSource<any>();
  installedOptionsdataSource=new MatTableDataSource<any>();

  selected=['None', 'Yes', 'No'];

  OtherInfoSelected=["Multi-User", "Y", "N", "Lease", "IP-CO", "144/144 Kbps"]


  OptionalInfo=['5', 'No', 'Static IP', 'NAT'];

  selectedSubscribedOption: any = {
    "quantity":"0",
    "byoCpeIndicator":"No",
    "natOfferInd":"No",
    "staticIpInd":"No"
  };
  selectedServerInfo= {
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
    "wanCustomerRouterIp":"",
    "hsiaHeldOrdInd":"",
    "serviceClass":"Basic",
    "networkTransportType":"",
    "accessSpeed":"144/144 Kbps",
    "tableInstalledOption":[
      {
      "serviceOptionsName":"",
      "quantity":"",
      "byoCpeIndicator":"",
      "natOfferInd":"",
      "staticIpInd":""
      }

    ],

  }


  constructor(public dialog: MatDialog,private _serviceInfoService : ServiceInfoService) {
    //this.selectedRow=0;
   }

  ngOnInit() {
    this._serviceInfoService.getServiceInfoData(this.caseInfo.caseId).subscribe(data => {
      this.serviceInfo = this.dataSource.data= data;
      this.isLoading=false;
    },error=>{
      this.isLoading=false;
    }
  );
  }

  setClickedRow(row){
    this.selectedServerInfo = row;
    this.installedOptionsdataSource.data = this.selectedServerInfo.tableInstalledOption;
    this.serviceFrom = "";
this.serviceTo = "";
if(this.selectedServerInfo.lanEndUserIp!=null){

let ipStr = this.selectedServerInfo.lanEndUserIp;
let fromIp ="";
let toIp = "";
let vals = ipStr.split('.');
let lastVal = parseInt(vals[vals.length -1]);
vals[vals.length -1] = (lastVal - 5).toString();
fromIp = vals.toString().replace(/,/g,".");
console.log(`fromIp value :: ${fromIp}`);
this.serviceFrom=fromIp;
console.log(`serviceFrom value :: ${this.serviceFrom}`);
vals[vals.length -1] = (lastVal - 1).toString();
toIp = vals.toString().replace(/,/g,".");
this.serviceTo=toIp;

}
}

  selectInstallOption(row){
    this.selectedSubscribedOption=row;
    this.quantity=row.quantity;
     console.log(row.quantity)
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
