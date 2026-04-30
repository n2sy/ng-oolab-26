import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infos } from './infos';

describe('Infos', () => {
  let component: Infos;
  let fixture: ComponentFixture<Infos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Infos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
