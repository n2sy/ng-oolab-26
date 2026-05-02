import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpObservable } from './exp-observable';

describe('ExpObservable', () => {
  let component: ExpObservable;
  let fixture: ComponentFixture<ExpObservable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpObservable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpObservable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
