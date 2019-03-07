import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballSerbithangPage } from './football-serbithang.page';

describe('FootballSerbithangPage', () => {
  let component: FootballSerbithangPage;
  let fixture: ComponentFixture<FootballSerbithangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballSerbithangPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballSerbithangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
