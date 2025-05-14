import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProductoOperadorComponent } from './crear-producto-operador.component';

describe('CrearProductoOperadorComponent', () => {
  let component: CrearProductoOperadorComponent;
  let fixture: ComponentFixture<CrearProductoOperadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearProductoOperadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearProductoOperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
