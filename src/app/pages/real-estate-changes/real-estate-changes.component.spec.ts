import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateChangesComponent } from './real-estate-changes.component';

describe('RealEstateChangesComponent', () => {
  let component: RealEstateChangesComponent;
  let fixture: ComponentFixture<RealEstateChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealEstateChangesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealEstateChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
