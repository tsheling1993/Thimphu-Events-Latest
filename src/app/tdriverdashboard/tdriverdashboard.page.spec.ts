import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdriverdashboardPage } from './tdriverdashboard.page';

describe('TdriverdashboardPage', () => {
  let component: TdriverdashboardPage;
  let fixture: ComponentFixture<TdriverdashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdriverdashboardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdriverdashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
