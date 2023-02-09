import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandRoyaltyComponent } from './land-royalty.component';

describe('LandRoyaltyComponent', () => {
  let component: LandRoyaltyComponent;
  let fixture: ComponentFixture<LandRoyaltyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandRoyaltyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandRoyaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
