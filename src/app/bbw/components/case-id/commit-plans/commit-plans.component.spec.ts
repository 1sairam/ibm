import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitPlansComponent } from './commit-plans.component';

describe('CommitPlansComponent', () => {
  let component: CommitPlansComponent;
  let fixture: ComponentFixture<CommitPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
