import { Component } from '@angular/core';
import { User } from '../models/user';
import { InventarioOperador} from "../models/inventario-operador";
import { UserService } from '../services/user.service';
import { InventarioService } from '../services/inventario.service';
import { Food } from '../models/food';

@Component({
  selector: 'app-inventario-operador',
  standalone: false,
  templateUrl: './inventario-operador.component.html',
  styleUrl: './inventario-operador.component.css'
})
export class InventarioOperadorComponent {

  constructor(
    private userService: UserService,
    private inventarioService: InventarioService
  ){}

  operadorRegistrado!: User;
  inventario!:  InventarioOperador[];
  comida!: Food[];

  pedido: boolean = false;


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
  this.inventarioService.obtenerAlimentos(this.operadorRegistrado.token,this.operadorRegistrado.id).subscribe(
    (data: Food[]) => {
      this.comida = data;
    },
    (error) => {
      console.error('Error al obtener inventario:', error);
    }
  )
  }



  hacerPedido(){
  this.pedido = true;
  }

  recargarInventario() {
   this.inventarioService.obtenerAlimentos(this.operadorRegistrado.token,this.operadorRegistrado.id).subscribe(
    (data: Food[]) => {
      this.comida = data;
    },
    (error) => {
      console.error('Error al obtener inventario:', error);
    }
  );
  }


}


