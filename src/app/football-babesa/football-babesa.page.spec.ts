import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballBabesaPage } from './football-babesa.page';

describe('FootballBabesaPage', () => {
  let component: FootballBabesaPage;
  let fixture: ComponentFixture<FootballBabesaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballBabesaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballBabesaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
