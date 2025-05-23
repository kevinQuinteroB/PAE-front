import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { MenuService } from '../services/menu.service';
import { Menu, Food } from '../models/menu';
import { User } from '../models/user';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus: Menu[] = [];
  alimentosDisponibles: Food[] = [];
  colegioRegistrado!: User;
  showModal: boolean = false;
  nuevoMenu: Menu = {
    school: { idUser: 0 },
    alimentos: []
  };
  maxAlimentos: number = 5; // Maximum number of foods allowed

  constructor(
    private userService: UserService,
    private menuService: MenuService
  ) {}

  ngOnInit() {
    this.colegioRegistrado = this.userService.getUser();
    console.log('Token:', this.colegioRegistrado.token);
    this.cargarMenus();
    this.cargarAlimentos();
  }

  cargarMenus() {
    this.menuService.listMenus(this.colegioRegistrado.id, this.colegioRegistrado.token).subscribe(
      (data: Menu[]) => {
        this.menus = data;
      },
      (error) => {
        console.error('Error al obtener menús:', error);
      }
    );
  }

  cargarAlimentos() {
    this.menuService.listFoods(this.colegioRegistrado.id, this.colegioRegistrado.token).subscribe(
      (data: Food[]) => {
        this.alimentosDisponibles = data;
      },
      (error) => {
        console.error('Error al obtener alimentos:', error);
      }
    );
  }

  abrirModal() {
    this.showModal = true;
    this.nuevoMenu = {
      school: { idUser: this.colegioRegistrado.id },
      alimentos: []
    };
  }

  cerrarModal() {
    this.showModal = false;
  }

  crearMenu() {
    if (this.nuevoMenu.alimentos.length === 0) {
      alert('Por favor, selecciona al menos un alimento.');
      return;
    }
    if (this.nuevoMenu.alimentos.length > this.maxAlimentos) {
      alert(`No puedes seleccionar más de ${this.maxAlimentos} alimentos.`);
      return;
    }

    this.menuService.createMenu(this.nuevoMenu, this.colegioRegistrado.token).subscribe({
      next: (res: Menu) => {
        console.log('Menú creado:', res);
        this.menus.push(res);
        this.cerrarModal();
      },
      error: (err) => {
        console.error('Error al crear menú:', err);
        alert('Error al crear menú. Por favor, intenta de nuevo.');
      }
    });
  }

  getAlimentosDisplay(menu: Menu): string {
    return menu.alimentos
      .map((a: { idFood: number }) => {
        const food = this.alimentosDisponibles.find(f => f.idFood === a.idFood);
        return food?.name || a.idFood;
      })
      .join(', ');
  }

  isAlimentoDisabled(alimento: Food): boolean {
    return (
      this.nuevoMenu.alimentos.length >= this.maxAlimentos &&
      !this.nuevoMenu.alimentos.some(a => a.idFood === alimento.idFood)
    );
  }
}