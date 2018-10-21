import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[bbwDynamicCompManager]'
})
export class DynamicCompManagerDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }


  

}
