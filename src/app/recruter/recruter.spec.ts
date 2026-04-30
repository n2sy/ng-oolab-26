import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recruter } from './recruter';

describe('Recruter', () => {
  let component: Recruter;
  let fixture: ComponentFixture<Recruter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Recruter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Recruter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
