import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesAndDisbursementsComponent } from './fees-and-disbursements.component';

describe('FeesAndDisbursementsComponent', () => {
  let component: FeesAndDisbursementsComponent;
  let fixture: ComponentFixture<FeesAndDisbursementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeesAndDisbursementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesAndDisbursementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
