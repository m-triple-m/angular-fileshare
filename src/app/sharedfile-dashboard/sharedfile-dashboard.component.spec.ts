import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedfileDashboardComponent } from './sharedfile-dashboard.component';

describe('SharedfileDashboardComponent', () => {
  let component: SharedfileDashboardComponent;
  let fixture: ComponentFixture<SharedfileDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedfileDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedfileDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
