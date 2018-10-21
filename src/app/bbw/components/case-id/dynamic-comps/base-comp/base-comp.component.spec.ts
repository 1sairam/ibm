import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCompComponent } from './base-comp.component';

describe('BaseCompComponent', () => {
  let component: BaseCompComponent;
  let fixture: ComponentFixture<BaseCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
