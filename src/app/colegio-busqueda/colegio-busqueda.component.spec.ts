import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColegioBusquedaComponent } from './colegio-busqueda.component';

describe('ColegioBusquedaComponent', () => {
  let component: ColegioBusquedaComponent;
  let fixture: ComponentFixture<ColegioBusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColegioBusquedaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColegioBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
