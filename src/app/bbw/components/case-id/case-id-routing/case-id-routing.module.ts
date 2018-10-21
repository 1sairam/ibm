import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {routes} from './case-id-routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{useHash: true}),
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class CaseIdRoutingModule { }
