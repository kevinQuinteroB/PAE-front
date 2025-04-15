import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoOperadorComponent } from './pedido-operador.component';

describe('PedidoOperadorComponent', () => {
  let component: PedidoOperadorComponent;
  let fixture: ComponentFixture<PedidoOperadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PedidoOperadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoOperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
