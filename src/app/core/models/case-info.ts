import { TableCase } from './table-case';

export class CaseInfo {
    
    constructor(caseId:string,tableCase:TableCase){
        this.caseId = caseId;
        this.tableCase = tableCase;
    }
    "tableCase": TableCase;
    "caseId": string;
}
