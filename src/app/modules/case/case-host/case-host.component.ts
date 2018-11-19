import { Component, OnInit, ViewChild, Input, OnDestroy, ComponentFactoryResolver } from '@angular/core';
import { CaseCompManagerDirective } from '../../../core/directives/case-comp-manager.directive';
import { CaseCompItem } from '../../../core/models/case-comp-item';

@Component({
  selector: 'bbw-case-host',
  templateUrl: './case-host.component.html',
  styleUrls: ['./case-host.component.css']
})
export class CaseHostComponent implements OnInit {

  @Input() caseCompItems: CaseCompItem[];

  @ViewChild(CaseCompManagerDirective) caseHost: CaseCompManagerDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  currentCompIndex = -1;

  ngOnInit() {
    this.loadComponent(0);
  }

  ngOnDestroy(){

  }

  loadComponent(index:number) {
   // this.currentAdIndex = (this.currentAdIndex + 1) % this.caseCompItems.length;
    this.currentCompIndex = index;
    console.log(this.caseCompItems);
    let compItem = this.caseCompItems[this.currentCompIndex];
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(compItem.component);
    let viewContainerRef = this.caseHost.viewContainerRef;
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance).changeToComponent.subscribe((compIndex:number) => {
      this.loadComponent(compIndex);
    }) ;
    //(<AdComponent>componentRef.instance).data = adItem.data;
  }

}
