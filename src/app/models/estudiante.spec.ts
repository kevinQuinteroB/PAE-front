import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Estudiante } from './estudiante';

describe('Estudiante', () => {
  let component: Estudiante;
  let fixture: ComponentFixture<Estudiante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Estudiante]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Estudiante);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});