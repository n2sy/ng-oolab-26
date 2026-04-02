import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageServers } from './manage-servers';

describe('ManageServers', () => {
  let component: ManageServers;
  let fixture: ComponentFixture<ManageServers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageServers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageServers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
