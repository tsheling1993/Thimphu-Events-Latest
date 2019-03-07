import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersupdatePage } from './othersupdate.page';

describe('OthersupdatePage', () => {
  let component: OthersupdatePage;
  let fixture: ComponentFixture<OthersupdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthersupdatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OthersupdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
