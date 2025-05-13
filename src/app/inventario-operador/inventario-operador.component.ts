import { Component } from '@angular/core';
import { User } from '../models/user';
import { InventarioOperador} from "../models/inventario-operador";
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inventario-operador',
  standalone: false,
  templateUrl: './inventario-operador.component.html',
  styleUrl: './inventario-operador.component.css'
})
export class InventarioOperadorComponent {

  constructor(
    private userService: UserService,
  ){}

  operadorRegistrado!: User;
  inventario!:  InventarioOperador[];
  ngOnInit(){
  this.operadorRegistrado = this.userService.getUser();
  this.userService.listarInventarioOperador(this.operadorRegistrado.token ,this.operadorRegistrado.id).subscribe(
    (data: InventarioOperador[]) => {
      this.inventario = data;
    },
    (error) => {
      console.error('Error al obtener inventario:', error);
    }
  );
  }
}


