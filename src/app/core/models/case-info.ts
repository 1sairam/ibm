import { ActivityLog } from './activity-log';

export class CaseInfo {
    
    constructor(caseId:string,activity:ActivityLog[]){
        this.caseId = caseId;
        this.activity=activity;
    }
    "caseId":string;
    "activity":ActivityLog[];
}
