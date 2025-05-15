import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearQuejaComponent } from './crear-queja.component';

describe('CrearQuejaComponent', () => {
  let component: CrearQuejaComponent;
  let fixture: ComponentFixture<CrearQuejaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearQuejaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearQuejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
