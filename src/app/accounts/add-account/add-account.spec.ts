import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccount } from './add-account';

describe('AddAccount', () => {
  let component: AddAccount;
  let fixture: ComponentFixture<AddAccount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAccount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAccount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
