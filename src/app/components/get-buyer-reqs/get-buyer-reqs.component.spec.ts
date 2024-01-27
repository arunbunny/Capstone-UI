import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBuyerReqsComponent } from './get-buyer-reqs.component';

describe('GetBuyerReqsComponent', () => {
  let component: GetBuyerReqsComponent;
  let fixture: ComponentFixture<GetBuyerReqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetBuyerReqsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetBuyerReqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
