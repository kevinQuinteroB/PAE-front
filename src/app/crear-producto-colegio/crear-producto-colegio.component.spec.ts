import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProductoColegioComponent } from './crear-producto-colegio.component';

describe('CrearProductoColegioComponent', () => {
  let component: CrearProductoColegioComponent;
  let fixture: ComponentFixture<CrearProductoColegioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearProductoColegioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearProductoColegioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
