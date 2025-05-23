import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu.component';
import { UserService } from '../services/user.service';
import { MenuService } from '../services/menu.service';
import { Menu } from '../models/menu';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuComponent],
      imports: [HttpClientModule, FormsModule],
      providers: [UserService, MenuService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display alimentos correctly', () => {
    component.alimentosDisponibles = [
      { idFood: 1, name: 'Pizza' },
      { idFood: 2, name: 'Burger' }
    ];
    const menu: Menu = {
      school: { idUser: 1 },
      alimentos: [
        { idFood: 1 },
        { idFood: 2 }
      ]
    };
    expect(component.getAlimentosDisplay(menu)).toBe('Pizza, Burger');
  });
});