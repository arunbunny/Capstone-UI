import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessAlertDialog } from './success-alert.dialog';

describe('SuccessAlertDialog', () => {
  let component: SuccessAlertDialog;
  let fixture: ComponentFixture<SuccessAlertDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessAlertDialog ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessAlertDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
