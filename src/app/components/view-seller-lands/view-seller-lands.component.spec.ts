import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSellerLandsComponent } from './view-seller-lands.component';

describe('ViewSellerLandsComponent', () => {
  let component: ViewSellerLandsComponent;
  let fixture: ComponentFixture<ViewSellerLandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSellerLandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSellerLandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
