import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorBusquedaComponent } from './operador-busqueda.component';

describe('OperadorBusquedaComponent', () => {
  let component: OperadorBusquedaComponent;
  let fixture: ComponentFixture<OperadorBusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OperadorBusquedaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadorBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
