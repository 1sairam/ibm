import {BrassComponent} from '../brass/brass.component';
import {CaseIdDetailsComponent} from '../case-id-details/case-id-details.component';
import {Routes} from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/caseId', pathMatch: 'full' },
    { path: 'brass', component: BrassComponent  },
    { path: 'caseId', component: CaseIdDetailsComponent  },
];
