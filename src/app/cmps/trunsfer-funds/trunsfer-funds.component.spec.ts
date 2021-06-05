import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrunsferFundsComponent } from './trunsfer-funds.component';

describe('TrunsferFundsComponent', () => {
  let component: TrunsferFundsComponent;
  let fixture: ComponentFixture<TrunsferFundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrunsferFundsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrunsferFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
