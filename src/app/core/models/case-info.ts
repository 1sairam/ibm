import { ActivityLog } from './activity-log';
import { CommHistory } from './comm-history';

export class CaseInfo {
    
    constructor(caseId:string,activity:ActivityLog[],commHistory: CommHistory[]){
        this.caseId = caseId;
        this.activity=activity;
    }
    "caseId":string;
    "activity":ActivityLog[];
    "commHistory" : CommHistory[];
}
