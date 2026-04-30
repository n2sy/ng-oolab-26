import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpSignal } from './exp-signal';

describe('ExpSignal', () => {
  let component: ExpSignal;
  let fixture: ComponentFixture<ExpSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpSignal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
