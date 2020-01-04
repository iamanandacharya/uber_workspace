import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchridePage } from './searchride.page';

describe('SearchridePage', () => {
  let component: SearchridePage;
  let fixture: ComponentFixture<SearchridePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchridePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchridePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
