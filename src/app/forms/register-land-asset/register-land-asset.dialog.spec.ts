import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLandAssetDialog } from './register-land-asset.dialog';

describe('RegisterLandAssetDialog', () => {
  let component: RegisterLandAssetDialog;
  let fixture: ComponentFixture<RegisterLandAssetDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterLandAssetDialog ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterLandAssetDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
