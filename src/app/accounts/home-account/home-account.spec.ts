import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAccount } from './home-account';

describe('HomeAccount', () => {
  let component: HomeAccount;
  let fixture: ComponentFixture<HomeAccount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAccount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAccount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
