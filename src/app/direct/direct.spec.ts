import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Direct } from './direct';

describe('Direct', () => {
  let component: Direct;
  let fixture: ComponentFixture<Direct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Direct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Direct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
