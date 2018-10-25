import { Component, OnInit,ViewChild,Type,ComponentFactoryResolver } from '@angular/core';
import {DynamicCompManagerDirective} from '../../dynamic-comp-manager.directive';
import {Comp1Component} from '../comp1/comp1.component';

@Component({
  selector: 'bbw-base-comp',
  templateUrl: './base-comp.component.html',
  styleUrls: ['./base-comp.component.css']
})
export class BaseCompComponent implements OnInit {

  currentAdIndex = 0;

  @ViewChild(DynamicCompManagerDirective) adHost: DynamicCompManagerDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent(Comp1Component);//initial component
  }

  loadComponent(component: Type<any>) {

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);
    
    (componentRef.instance).changeToComponent.subscribe((component: Type<any>) => { 
      this.loadComponent(component);
    }) ;
   // (<AdComponent>componentRef.instance).data = adItem.data;
  
  }


}
