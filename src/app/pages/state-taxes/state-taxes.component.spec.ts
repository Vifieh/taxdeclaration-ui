import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateTaxesComponent } from './state-taxes.component';

describe('StateTaxesComponent', () => {
  let component: StateTaxesComponent;
  let fixture: ComponentFixture<StateTaxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateTaxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateTaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
