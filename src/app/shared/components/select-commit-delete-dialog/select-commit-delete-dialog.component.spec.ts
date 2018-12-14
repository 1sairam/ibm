import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCommitDeleteDialogComponent } from './select-commit-delete-dialog.component';

describe('SelectCommitDeleteDialogComponent', () => {
  let component: SelectCommitDeleteDialogComponent;
  let fixture: ComponentFixture<SelectCommitDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCommitDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCommitDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
