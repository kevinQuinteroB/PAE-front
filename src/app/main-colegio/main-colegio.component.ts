import { Component, ElementRef, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-main-colegio',
  standalone: false,
  templateUrl: './main-colegio.component.html',
  styleUrl: './main-colegio.component.css'
})
export class MainColegioComponent implements AfterViewInit {

  @ViewChild('deslizador') deslizador!: ElementRef;
  @ViewChild('menuButton') menuButton!: ElementRef;
  @ViewChild('closeButton') closeButton!: ElementRef;

  constructor(private renderer: Renderer2, private router: Router, private userService:UserService) {}
  colegioRegistrado!: User;
  ngOnInit() {
  this.colegioRegistrado = this.userService.getUser();
  this.validarUsuario();
  console.log(this.colegioRegistrado)
  }
    validarUsuario() {
    setTimeout(() => {
      if (!this.colegioRegistrado.username) {
        console.log(this.colegioRegistrado.username)
        this.router.navigate(['/login']);
      }
    }, 100); // Puedes ajustar este tiempo si quieres
  }
  ngAfterViewInit(){
    if (!this.menuButton || !this.closeButton || !this.deslizador) {
      console.error('No se encontraron los elementos del menú.');
      return;
    }

    this.menuButton.nativeElement.addEventListener('click', () => {
      this.deslizador.nativeElement.style.transform = 'translateX(0)';
    });

    this.closeButton.nativeElement.addEventListener('click', () => {
      this.deslizador.nativeElement.style.transform = 'translateX(-250px)';
    });

    this.renderer.listen('document', 'click', (event: Event) => {
      const targetElement = event.target as HTMLElement;
      if (this.deslizador && !this.deslizador.nativeElement.contains(targetElement) &&
          !this.menuButton.nativeElement.contains(targetElement)) {
        this.deslizador.nativeElement.style.transform = 'translateX(-250px)';
      }
    });
  }

    /* LOGICA DE ABRIR Y CERRAR COMPONENTES */

    activeComponent: String | null = "colegio-busqueda";

    setActiveComponent(component: string){
      this.activeComponent = component;
    }
    isActive(component: string): boolean{
      return this.activeComponent == component;
    }
    closeActiveComponent(){
      this.activeComponent = "colegio-busqueda";
    }
    goToMenu() {
    this.router.navigate(['/menu']);
  }
    /* SALIR DE LA SESION */
  
    salir() {
      this.router.navigate(['/login']);
    }

}
