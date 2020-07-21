import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvencontrolComponent } from './evencontrol.component';

describe('EvencontrolComponent', () => {
  let component: EvencontrolComponent;
  let fixture: ComponentFixture<EvencontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvencontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvencontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
