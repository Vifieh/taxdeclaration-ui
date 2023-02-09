import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudicialActsComponent } from './judicial-acts.component';

describe('JudicialActsComponent', () => {
  let component: JudicialActsComponent;
  let fixture: ComponentFixture<JudicialActsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JudicialActsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JudicialActsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
