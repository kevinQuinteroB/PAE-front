import { Component, ElementRef, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-operador',
  standalone: false,
  templateUrl: './main-operador.component.html',
  styleUrl: './main-operador.component.css'
})
export class MainOperadorComponent implements AfterViewInit{

                          /*LOGICA  DESLIZADOR */

  @ViewChild('deslizador') deslizador!: ElementRef;
  @ViewChild('menuButton') menuButton!: ElementRef;
  @ViewChild('closeButton') closeButton!: ElementRef;

  constructor(private renderer: Renderer2, private router: Router) {}

  ngAfterViewInit() {
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

  activeComponent: String | null = "operador-busqueda";

  setActiveComponent(component: string){
    this.activeComponent = component;
  }
  isActive(component: string): boolean{
    return this.activeComponent == component;
  }

  /* SALIR DE LA SESION */

  salir() {
    this.router.navigate(['/login']);
  }

}
