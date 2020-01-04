import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationModelComponent } from './destination-model.component';

describe('DestinationModelComponent', () => {
  let component: DestinationModelComponent;
  let fixture: ComponentFixture<DestinationModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
