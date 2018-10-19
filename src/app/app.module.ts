import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {CommonMaterialModule} from './common-material/common-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CaseIdDetailsComponent } from './case-id-details/case-id-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CaseIdDetailsComponent
  ],
  imports: [
    BrowserModule,
    CommonMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
