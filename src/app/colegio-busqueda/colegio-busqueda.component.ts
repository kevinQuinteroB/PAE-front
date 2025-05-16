import { Component } from '@angular/core';
import { Complaint} from '../models/queja';
import { QuejaService } from '../services/queja.service';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Order } from '../models/order';

@Component({
  selector: 'app-colegio-busqueda',
  standalone: false,
  templateUrl: './colegio-busqueda.component.html',
  styleUrl: './colegio-busqueda.component.css'
})
export class ColegioBusquedaComponent {
  user: User | null = null;
  ordenes: Order[] = [];
  token!: string;

constructor(
    private quejaService: QuejaService,
    private userService: UserService, 
  ){}


   colegioRegistrado!: User;
  ngOnInit() {
  this.colegioRegistrado = this.userService.getUser();
  console.log('Token:', this.colegioRegistrado.token);
  this.quejaService.listarOrdenesPorEscuela(this.colegioRegistrado.token,this.colegioRegistrado.id).subscribe(
          (data: Order[]) => {
              this.ordenes = data;
            },
            (error) => {
              console.error('Error al obtener inventario:', error);
            }
  );
    
  }

}
