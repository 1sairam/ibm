import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCommitmentsComponent } from './select-commitments.component';

describe('SelectCommitmentsComponent', () => {
  let component: SelectCommitmentsComponent;
  let fixture: ComponentFixture<SelectCommitmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCommitmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCommitmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
