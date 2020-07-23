import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStatusDashboardComponent } from './user-status-dashboard.component';

describe('UserStatusDashboardComponent', () => {
  let component: UserStatusDashboardComponent;
  let fixture: ComponentFixture<UserStatusDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStatusDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStatusDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
