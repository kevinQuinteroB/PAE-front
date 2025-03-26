import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainOperadorComponent } from './main-operador.component';

describe('MainOperadorComponent', () => {
  let component: MainOperadorComponent;
  let fixture: ComponentFixture<MainOperadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainOperadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainOperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
