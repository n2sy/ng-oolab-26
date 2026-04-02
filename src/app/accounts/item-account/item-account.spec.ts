import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAccount } from './item-account';

describe('ItemAccount', () => {
  let component: ItemAccount;
  let fixture: ComponentFixture<ItemAccount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemAccount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemAccount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
