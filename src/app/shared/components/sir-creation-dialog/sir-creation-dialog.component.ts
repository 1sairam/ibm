import { Component,EventEmitter, Inject, Output} from '@angular/core';
import {MatDialog,  MatDialogConfig,MAT_DIALOG_DATA,MatDialogRef} from "@angular/material";
import { CaseInfo } from 'src/app/core/models/case-info';
import {SirResponse} from './SirResponse';
import { Observable, of} from 'rxjs';
import { HttpClient ,HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { BrassComponent } from 'src/app/modules/case/brass/brass.component';
import { BrassService } from 'src/app/core/services/brass.service';


@Component({
  selector: 'bbw-sir-creation-dialog',
  templateUrl: './sir-creation-dialog.component.html',
  styleUrls: ['./sir-creation-dialog.component.css'],
  
})
export class SirCreationDialogComponent  {

@Output() basedOnSirResponse = new EventEmitter<boolean>();

  buttonDisabled: boolean;

  private _url: string ='./sendSirRequest';

  constructor(
    public dialogRef: MatDialogRef<SirCreationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public caseId: any,private http : HttpClient,public dummy:BrassService) {

    }
    
    onOkClick():Observable<SirResponse[]>{
      console.log('trigger rest call');
      console.log(this._url,{params :new HttpParams().set('caseId',this.caseId)});
      this.dialogRef.close();
      this.http.get<SirResponse[]>(this._url,{params :new HttpParams().set('caseId',this.caseId)}).subscribe(
        response =>{
        console.log("response:::"+response);
        this.dialogRef.close('true');
        },
        error =>{

          if (error instanceof HttpErrorResponse) {
            //Backend returns unsuccessful response codes such as 404, 500 etc.				  
            console.error('Backend returned status code: ', error.status);
            console.error('Response body:', error.message);          	  
        } else {
            //A client-side or network error occurred.	          
            console.error('An error occurred:', error.message);          
        } 
        this.dialogRef.close('false');    
      }
      
      );
        
      return this.http.get<SirResponse[]>(this._url,{params :new HttpParams().set('caseId',this.caseId)});
      
    }
    onCancelClick(){
     this.dialogRef.close();

    }
}
