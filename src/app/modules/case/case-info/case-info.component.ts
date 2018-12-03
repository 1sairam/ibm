import { Component, OnInit, Output,EventEmitter  } from '@angular/core';
import { CaseInfoService } from '../../../core/services/case-info.service';
import { CaseInfo } from '../../../core/models/case-info';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'bbw-case-info',
  templateUrl: './case-info.component.html',
  styleUrls: ['./case-info.component.css']
})
export class CaseInfoComponent implements OnInit {

  @Output() changeToComponent = new EventEmitter<number>();

  caseInfo: CaseInfo;//default
  caseInfoDetails : any;

  constructor(private caseInfoService:CaseInfoService,public dialog: MatDialog) {

  }
  selectedSubtypeValue = 'Cancel';

  fullName : string;
  roomAndFloor : string;
  country : string;
  ngOnInit() {
    this.caseInfo = this.caseInfoService.getSelectedCaseInfo();
    this.fullName = this.caseInfo.tableContact.firstName + this.caseInfo.tableContact.lastName; 
    this.roomAndFloor = this.caseInfo.tableAddress.floor + this.caseInfo.tableAddress.room; 
    if(this.caseInfo.tableAddress.xCountry == null){
      this.caseInfo.tableAddress.xCountry = "USA";
    }
    console.log("caseInfo:"+this.caseInfo);
  }

  types = [
            "Acct Maintenance",
            "Disconnect",
            "Life Cycle",
            "Request For Service",
            "Record-Only Update",
            "Resume",
            "Suspend",
            "Technical Support"
          ];
  subTypes =  [
                  "New",
                  "Add connection",
                  "BW Upgrade",
                  "BW Downgrade",
                  "BBN Migration",
                  "Disconnect",
                  "Supp",
                  "C9000 Migration",
                  "Cancel",
                  "Change",
                  "MARO Change",
                  "Fraud Resumption",
                  "Fraud & Abuse request"
              ];
// priorityAndSeverity = [
//                         "Please Specify",
//                         "0-Critical",
//                         "1-High",
//                         "2-Medium",
//                         "3-Low",
//                         "4-No Rush"
//                       ];
serviceIndicators = ["MIS","VPN","WSS","DSL"];
salesOffers = ["DSL","AVTS","Please Specify","MIS"];
custQualifiers = [
                    ".com",
                    "Concert",
                    "Domestic",
                    "DSP",
                    "Government",
                    "GV Resale",
                    "International",
                    "ISP",
                    "Internal",
                    "MARO",
                    "NTS Carrier",
                    "NTS Hosting",
                    "Regular Corporate",
                    "Re-Marketer",
                    "Reseller Direct",
                    "VAR/Agent",
                    "Wholesale",
                    "WH End User",
                    "N/A",
                    ""
                 ];
origins = [
            "Please Specify",
            "CCOM",
            "Customers",
            "DSL BRS",
            "DSL CSM",
            "DSL MDS",
            "DSL On-Line",
            "EasyLink",
            "Email",
            "E-Order",
            "Fax",
            "Letter",
            "Line-Split Requested",
            "MIS Provisioning",
            "MNS",
            "NetSolve",
            "Network Care",
            "Other",
            "Phone",
            "VISP Partner Request",
            "VISP_Partner",
            "VISP End User Request",
            "VISP_end_user",
            "Web MIS SOF",
            "World Wide Web",
            "Website Services(EW3)",
            "Web LCM site",
            "Web WSS SOF"
          ];
custPremises = ["Domestic"];

  changeComp(index){
    this.changeToComponent.emit(index);
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  MAT_TAB_COLLAPSED_HEIGHT = '35px';
  MAT_TAB_EXPANDED_HEIGHT = '25px';
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'more-info-dialog-message.html',
})
export class DialogContentExampleDialog {
  data:any;
}

