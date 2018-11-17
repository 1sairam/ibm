import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Shared OR common external and angular modules */
import { MaterialModule } from '../app/shared/modules/material/material.module';
import { CdkModule } from '../app/shared/modules/cdk/cdk.module';
import { RestClientModule } from './shared/modules/rest-client/rest-client.module';

/* Application modules */
import { CaseModule } from './modules/case/case.module';
import { QueuesModule } from './modules/queues/queues.module';
import { WipbinsModule } from './modules/wipbins/wipbins.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CdkModule,
    RestClientModule,
    CaseModule,
    QueuesModule,
    WipbinsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
