import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioOperadorComponent } from './inventario-operador.component';

describe('InventarioOperadorComponent', () => {
  let component: InventarioOperadorComponent;
  let fixture: ComponentFixture<InventarioOperadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InventarioOperadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioOperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
