import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './core/header/header.component';

/* Shared OR common external and angular modules */
import { MaterialModule } from '../app/shared/modules/material/material.module';
import { CdkModule } from '../app/shared/modules/cdk/cdk.module';
import { RestClientModule } from './shared/modules/rest-client/rest-client.module';
import { AngularModule } from './shared/modules/angular/angular.module';

/* Application modules */
import { CaseModule } from './modules/case/case.module';
import { QueuesModule } from './modules/queues/queues.module';
import { WipbinsModule } from './modules/wipbins/wipbins.module';
import { ServicesModule } from './core/services/services.module';
import { WarningMessageDialogComponent } from './shared/components/warning-message-dialog/warning-message-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WarningMessageDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularModule,
    MaterialModule,
    CdkModule,
    RestClientModule,
    CaseModule,
    QueuesModule,
    WipbinsModule,
    ServicesModule,
  ],
  providers: [],
  entryComponents:[
    WarningMessageDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
