import { Component, Output, EventEmitter  } from '@angular/core';
import { Input } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-operador-busqueda',
  standalone: false,
  templateUrl: './operador-busqueda.component.html',
  styleUrl: './operador-busqueda.component.css'
})
export class OperadorBusquedaComponent {
  @Input() listaColegios: User[] = [];
  @Output() colegioSeleccionado = new EventEmitter<User>();

  constructor(
    private userService: UserService 
  ){}

  activeFiltros: boolean = false;
  busqueda: string = '';

  setActiveFiltros(): boolean{
    return this.activeFiltros = !this.activeFiltros;
  }

  buscar(){
    console.log(this.busqueda)
    if (this.busqueda === '')
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
    else if (this.busqueda !== '')
      this.userService.buscarNombreColegio(this.busqueda).subscribe({
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

  guardarColegio(colegio: User) {
    this.colegioSeleccionado.emit(colegio);
  }
}
