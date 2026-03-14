import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAccounts } from './liste-accounts';

describe('ListeAccounts', () => {
  let component: ListeAccounts;
  let fixture: ComponentFixture<ListeAccounts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeAccounts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeAccounts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
