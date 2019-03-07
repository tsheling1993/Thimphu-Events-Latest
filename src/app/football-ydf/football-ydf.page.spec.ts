import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballYdfPage } from './football-ydf.page';

describe('FootballYdfPage', () => {
  let component: FootballYdfPage;
  let fixture: ComponentFixture<FootballYdfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballYdfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballYdfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
