import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuejasColegioComponent } from './quejas-colegio.component';

describe('QuejasColegioComponent', () => {
  let component: QuejasColegioComponent;
  let fixture: ComponentFixture<QuejasColegioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuejasColegioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuejasColegioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
