import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Liste } from './liste';

describe('Liste', () => {
  let component: Liste;
  let fixture: ComponentFixture<Liste>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Liste]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Liste);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
