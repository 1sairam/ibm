import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseIdDetailsComponent } from './case-id-details.component';

describe('CaseIdDetailsComponent', () => {
  let component: CaseIdDetailsComponent;
  let fixture: ComponentFixture<CaseIdDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseIdDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseIdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
