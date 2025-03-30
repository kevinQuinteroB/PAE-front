import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoColegioOperadorComponent } from './info-colegio-operador.component';

describe('InfoColegioOperadorComponent', () => {
  let component: InfoColegioOperadorComponent;
  let fixture: ComponentFixture<InfoColegioOperadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoColegioOperadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoColegioOperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
