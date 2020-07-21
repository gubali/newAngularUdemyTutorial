import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OddcontrolComponent } from './oddcontrol.component';

describe('OddcontrolComponent', () => {
  let component: OddcontrolComponent;
  let fixture: ComponentFixture<OddcontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OddcontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OddcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
