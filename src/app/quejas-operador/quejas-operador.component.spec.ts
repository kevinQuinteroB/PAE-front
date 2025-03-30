import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuejasOperadorComponent } from './quejas-operador.component';

describe('QuejasOperadorComponent', () => {
  let component: QuejasOperadorComponent;
  let fixture: ComponentFixture<QuejasOperadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuejasOperadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuejasOperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
