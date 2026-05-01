import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProducts } from './home-products';

describe('HomeProducts', () => {
  let component: HomeProducts;
  let fixture: ComponentFixture<HomeProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeProducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeProducts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
