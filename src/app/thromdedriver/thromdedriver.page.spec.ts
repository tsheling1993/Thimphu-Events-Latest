import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThromdedriverPage } from './thromdedriver.page';

describe('ThromdedriverPage', () => {
  let component: ThromdedriverPage;
  let fixture: ComponentFixture<ThromdedriverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThromdedriverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThromdedriverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
