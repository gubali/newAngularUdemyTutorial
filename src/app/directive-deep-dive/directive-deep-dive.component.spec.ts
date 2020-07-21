import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveDeepDiveComponent } from './directive-deep-dive.component';

describe('DirectiveDeepDiveComponent', () => {
  let component: DirectiveDeepDiveComponent;
  let fixture: ComponentFixture<DirectiveDeepDiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveDeepDiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveDeepDiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
