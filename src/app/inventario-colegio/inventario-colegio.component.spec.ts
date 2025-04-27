import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioColegioComponent } from './inventario-colegio.component';

describe('InventarioColegioComponent', () => {
  let component: InventarioColegioComponent;
  let fixture: ComponentFixture<InventarioColegioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InventarioColegioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioColegioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
