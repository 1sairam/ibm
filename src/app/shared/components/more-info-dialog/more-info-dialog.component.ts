import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CaseInfoService } from '../../../core/services/case-info.service';
@Component({
  selector: 'bbw-more-info-dialog',
  templateUrl: './more-info-dialog.component.html',
  styleUrls: ['./more-info-dialog.component.css']
})
export class MoreInfoDialogComponent implements OnInit {

  details : any;
  constructor(public dialogRef: MatDialogRef<MoreInfoDialogComponent>,public caseInfoService:CaseInfoService) { }

  ngOnInit() {
    this.details = this.caseInfoService.moreInfoDetails;
    // console.log(this.details.tableCase.xProjectNum);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

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
    
  priorityAndSeverity = [
    "Please Specify",
    "0 - Critical",
    "1 - High",
    "2 - Medium",
    "3 - Low",
    "4 - No Rush"
  ];

}
