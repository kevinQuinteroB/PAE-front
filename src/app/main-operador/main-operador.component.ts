import { Component, ElementRef, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

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

  constructor(
    private renderer: Renderer2,
    private router: Router,
    private userService: UserService,
  ) {}

operadorRegistrado!: User;
listaColegios!: User[];
colegioSeleccionado!: User;

ngOnInit() {
  this.operadorRegistrado = this.userService.getUser();
  this.validarUsuario();
  console.log(this.operadorRegistrado)

  this.userService.listarColegios().subscribe({
    next: (usuarios) => {
      this.listaColegios = usuarios.map(colegio => {
        const partes = colegio.address?.split(',') || [];
        return {
          ...colegio,
          calle: partes[0]?.trim() || '',
          ciudad: partes[1]?.trim() || '',
          departamento: partes[2]?.trim() || ''
        };
      });
      console.log(this.listaColegios);
    },
    error: (err) => {
      console.error('Error al obtener colegios:', err);
    }
  });
}


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

  validarUsuario() {
    setTimeout(() => {
      if (!this.operadorRegistrado.username) {
        console.log(this.operadorRegistrado.username)
        this.router.navigate(['/login']);
      }
    }, 100); // Puedes ajustar este tiempo si quieres
  }

  onColegioSeleccionado(colegio: User) {
    this.colegioSeleccionado = colegio; // opcional
    console.log('Colegio seleccionado:', colegio);
  
    this.setActiveComponent('info-colegio-operador'); // <--- Cambiar al componente de info
  }

  RegresarMain() {
    this.setActiveComponent('operador-busqueda'); // <--- Cambiar al componente de info
  }
}
