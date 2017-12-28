import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Acct1Component } from './acct1.component';

describe('Acct1Component', () => {
  let component: Acct1Component;
  let fixture: ComponentFixture<Acct1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Acct1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Acct1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
