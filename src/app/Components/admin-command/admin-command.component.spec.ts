import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCommandComponent } from './admin-command.component';

describe('AdminCommandComponent', () => {
  let component: AdminCommandComponent;
  let fixture: ComponentFixture<AdminCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCommandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
