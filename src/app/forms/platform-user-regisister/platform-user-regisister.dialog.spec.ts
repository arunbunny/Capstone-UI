import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformUserRegisisterDialog } from './platform-user-regisister.dialog';

describe('PlatformUserRegisisterDialog', () => {
  let component: PlatformUserRegisisterDialog;
  let fixture: ComponentFixture<PlatformUserRegisisterDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformUserRegisisterDialog ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatformUserRegisisterDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
