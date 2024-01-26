import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformLoginDialog } from './platform-login.dialog';

describe('PlatformLoginDialog', () => {
  let component: PlatformLoginDialog;
  let fixture: ComponentFixture<PlatformLoginDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformLoginDialog ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatformLoginDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
