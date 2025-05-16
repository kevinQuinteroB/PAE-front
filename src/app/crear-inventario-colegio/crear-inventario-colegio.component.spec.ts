import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearInventarioColegioComponent } from './crear-inventario-colegio.component';

describe('CrearInventarioColegioComponent', () => {
  let component: CrearInventarioColegioComponent;
  let fixture: ComponentFixture<CrearInventarioColegioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearInventarioColegioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearInventarioColegioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
