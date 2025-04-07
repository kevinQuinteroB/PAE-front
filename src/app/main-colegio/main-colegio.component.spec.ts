import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainColegioComponent } from './main-colegio.component';

describe('MainColegioComponent', () => {
  let component: MainColegioComponent;
  let fixture: ComponentFixture<MainColegioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainColegioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainColegioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
