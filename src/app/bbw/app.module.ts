import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './components/home/app.component';
import { CommonMaterialModule } from './common/modules/material/common-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CaseIdDetailsComponent } from './components/case-id/case-id-details/case-id-details.component';
import { BrassComponent } from '../bbw/components/case-id/brass/brass.component';
import { MoreInfoComponent } from '../bbw/components/case-id/more-info/more-info.component';
import { CommHistoryComponent } from './components/case-id/comm-history/comm-history.component';
import { CommitPlansComponent } from './components/case-id/commit-plans/commit-plans.component';
import {CaseIdRoutingModule} from './components/case-id/case-id-routing/case-id-routing.module';
import {CaseIdService} from './services/case-id.service';

@NgModule({
  declarations: [
    AppComponent,
    CaseIdDetailsComponent,
    BrassComponent,
    MoreInfoComponent,
    CommHistoryComponent,
    CommitPlansComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonMaterialModule,
    CaseIdRoutingModule,
    
  ],
  providers: [CaseIdService],
  bootstrap: [AppComponent]
})
export class AppModule {}
