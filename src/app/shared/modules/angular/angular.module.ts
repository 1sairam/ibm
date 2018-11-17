import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AngularModule { }
