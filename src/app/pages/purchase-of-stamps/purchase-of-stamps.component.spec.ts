import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOfStampsComponent } from './purchase-of-stamps.component';

describe('PurchaseOfStampsComponent', () => {
  let component: PurchaseOfStampsComponent;
  let fixture: ComponentFixture<PurchaseOfStampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseOfStampsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseOfStampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
