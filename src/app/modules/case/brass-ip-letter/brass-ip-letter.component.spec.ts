import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrassIpLetterComponent } from './brass-ip-letter.component';

describe('BrassIpLetterComponent', () => {
  let component: BrassIpLetterComponent;
  let fixture: ComponentFixture<BrassIpLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrassIpLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrassIpLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
