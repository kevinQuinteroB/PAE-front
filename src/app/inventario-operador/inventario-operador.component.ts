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
  crearinventario: boolean = false;

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
  this.recargarInventario();
  this.recargarInventarioOperador();
  }



  hacerPedido(){
  this.pedido = true;
  }

  crearInventario(){
  this.crearinventario = true;
  }

  actualizarInventario() {
  console.log('Recargando inventario...');
  this.recargarInventario();
  this.recargarInventarioOperador();
}


  recargarInventario() {
  this.inventarioService.obtenerAlimentos(this.operadorRegistrado.token, this.operadorRegistrado.id).subscribe(
    (data: Food[]) => {
      this.comida = data;
      console.log('Alimentos actualizados:', this.comida);  // Verifica si los alimentos están siendo actualizados
    },
    (error) => {
      console.error('Error al obtener alimentos:', error);
    }
  );
}

recargarInventarioOperador(){
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


