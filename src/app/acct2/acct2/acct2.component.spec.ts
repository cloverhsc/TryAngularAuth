import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Acct2Component } from './acct2.component';

describe('Acct2Component', () => {
  let component: Acct2Component;
  let fixture: ComponentFixture<Acct2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Acct2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Acct2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
