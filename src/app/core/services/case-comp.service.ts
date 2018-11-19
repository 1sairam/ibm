import { Injectable } from '@angular/core';

import { CaseCompItem } from '../models/case-comp-item';
import { ActivityLogComponent } from '../../modules/case/activity-log/activity-log.component';
import { MoreInfoComponent } from '../../modules/case/more-info/more-info.component';
import { CaseInfoComponent } from '../../modules/case/case-info/case-info.component';

@Injectable({
  providedIn: 'root'
})
export class CaseCompService {

  constructor() { }

  getCaseCompList(){
    return [
      new CaseCompItem(CaseInfoComponent),
      new CaseCompItem(ActivityLogComponent),
      new CaseCompItem(MoreInfoComponent),
    ]
  }
}
