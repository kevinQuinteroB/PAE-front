import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaColegioComponent } from './encuesta-colegio.component';

describe('EncuestaColegioComponent', () => {
  let component: EncuestaColegioComponent;
  let fixture: ComponentFixture<EncuestaColegioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EncuestaColegioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncuestaColegioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
