import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetstatusPage } from './internetstatus.page';

describe('InternetstatusPage', () => {
  let component: InternetstatusPage;
  let fixture: ComponentFixture<InternetstatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternetstatusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternetstatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
