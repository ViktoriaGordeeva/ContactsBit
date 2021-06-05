import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticticsPageComponent } from './statictics-page.component';

describe('StaticticsPageComponent', () => {
  let component: StaticticsPageComponent;
  let fixture: ComponentFixture<StaticticsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticticsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticticsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
