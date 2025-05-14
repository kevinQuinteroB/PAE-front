import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearInventarioOperadorComponent } from './crear-inventario-operador.component';

describe('CrearInventarioOperadorComponent', () => {
  let component: CrearInventarioOperadorComponent;
  let fixture: ComponentFixture<CrearInventarioOperadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearInventarioOperadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearInventarioOperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
