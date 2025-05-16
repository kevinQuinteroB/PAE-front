import { Router } from '@angular/router';
import { Component, ElementRef, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { QuejaService } from '../services/queja.service';
import { Complaint} from '../models/queja';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Order } from '../models/order';

@Component({
  selector: 'app-quejas-colegio',
  standalone: false,
  templateUrl: './quejas-colegio.component.html',
  styleUrl: './quejas-colegio.component.css'
})
export class QuejasColegioComponent implements AfterViewInit {

  @ViewChild('deslizador') deslizador!: ElementRef;
  @ViewChild('menuButton') menuButton!: ElementRef;
  @ViewChild('closeButton') closeButton!: ElementRef;

  constructor(private renderer: Renderer2, private router: Router,private quejaService: QuejaService, private UserService:UserService) {}
  quejas: Complaint[] = [];
  colegioRegistrado!: User;
    ngOnInit() {
  this.colegioRegistrado = this.UserService.getUser();
  
  this.quejaService.obtenerDatos(this.colegioRegistrado.token,this.colegioRegistrado.id).subscribe(
        (data: Complaint[]) => {
          this.quejas = data;
        },
        (error) => {
          console.error('Error al obtener inventario:', error);
        }
  );
    
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
  
    /* SALIR DE LA SESION */
  
    salir() {
      this.router.navigate(['/login']);
    }
    


    mostrarFormularioComplaint= false;

mostrarFormulario() {
  this.mostrarFormularioComplaint= true;
}

cerrarFormulario() {
  this.mostrarFormularioComplaint= false;
}


refrescarLista() {

}


}

