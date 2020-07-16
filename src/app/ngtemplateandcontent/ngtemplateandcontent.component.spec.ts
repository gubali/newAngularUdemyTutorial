import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtemplateandcontentComponent } from './ngtemplateandcontent.component';

describe('NgtemplateandcontentComponent', () => {
  let component: NgtemplateandcontentComponent;
  let fixture: ComponentFixture<NgtemplateandcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgtemplateandcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgtemplateandcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
