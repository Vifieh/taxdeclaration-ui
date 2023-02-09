import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryStatementsComponent } from './summary-statements.component';

describe('SummaryStatementsComponent', () => {
  let component: SummaryStatementsComponent;
  let fixture: ComponentFixture<SummaryStatementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryStatementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
