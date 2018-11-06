import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/shared/modules/material/material.module';
import { CdkModule } from '../app/shared/modules/cdk/cdk.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CdkModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
