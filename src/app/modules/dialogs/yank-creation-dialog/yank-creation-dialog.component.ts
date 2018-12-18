import { Component, Output, EventEmitter, Inject, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { YankCase } from '../../../core/models/yank-case';
import { YankService } from '../../../core/services/yank.service';
import { HttpClient ,HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of} from 'rxjs';

@Component({
  selector: 'bbw-yank-creation-dialog',
  templateUrl: './yank-creation-dialog.component.html',
  styleUrls: ['./yank-creation-dialog.component.css']
})
export class YankCreationDialogComponent {
  buttonDisabled: boolean;
  public SelectCase: any= "Case";
  public selectedCaseId: any="2345678";
  selectDrop = ["Case"];

  private _url: string ='../ordermgmtservice/v1/service/createSirRequest';

  constructor(
    public dialogRef: MatDialogRef<YankCreationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public caseId: any,private http : HttpClient,public dummy:YankService) {

    }
    YankCase = {
      "message" : "do Nothing",
      "status": 700
    };
    ngOnInit(){

    }

    onOkClick(){
  
      console.log(`trigger Yank rest call`);
      const params = new HttpParams().set('caseId',this.caseId);
      console.log(`URL:::${this._url},params ::: ${params}`);

     this.http.get<YankCase>(this._url,{params}).subscribe(data =>{
      console.log('response status code :: '+data);
      if(data.status==200){
        this.dialogRef.close(data);
      }else{
        this.dialogRef.close(data);
      }
     },error=>{
      if (error instanceof HttpErrorResponse) {
        console.log(`status code against Yank creation request:::${error.status}`);
         //Backend returns unsuccessful response codes such as 404, 500 etc.				  
         console.error('Backend returned status code: ', error.status);
         console.error('Response body:', error.message);          	  
     } else {
         //A client-side or network error occurred.	          
         console.error('An error occurred:', error.message);          
     } 
     this.YankCase.message= error.message;
     this.YankCase.status=error.status;
      this.dialogRef.close(this.YankCase);
     }
    );
}
onCancelClick(){
  this.dialogRef.close(this.YankCase);
 }
}


