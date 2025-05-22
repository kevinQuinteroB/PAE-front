import { Component } from '@angular/core';
import { User } from '../models/user';
import { InventarioOperador} from "../models/inventario-operador";
import { UserService } from '../services/user.service';
import { InventarioService } from '../services/inventario.service';
import { Food } from '../models/food';
import { InventarioColegio } from '../models/inventario-colegio';
@Component({
  selector: 'app-inventario-colegio',
  standalone: false,
  templateUrl: './inventario-colegio.component.html',
  styleUrl: './inventario-colegio.component.css'
})
export class InventarioColegioComponent {
constructor(
    private userService: UserService,
    private inventarioService: InventarioService
  ){}

  colegioRegistrado!: User;
  inventario!:  InventarioColegio[];
  comida!: Food[];
  crearinventario: boolean = false;
  inventarioParaEditar: InventarioColegio | null = null;


  pedido: boolean = false;
  

  ngOnInit(){
  this.colegioRegistrado = this.userService.getUser();
  this.userService.listarInventarioColegio(this.colegioRegistrado.token ,this.colegioRegistrado.id).subscribe(
    (data: InventarioColegio[]) => {
      this.inventario = data;
      console.log(this.inventario)
    },
    (error) => {
      console.error('Error al obtener inventario:', error);
    }
  );
  this.inventarioService.obtenerAlimentos(this.colegioRegistrado.token,this.colegioRegistrado.id).subscribe(
    (data: Food[]) => {
      this.comida = data;
    },
    (error) => {
      console.error('Error al obtener inventario:', error);
    }
  )
  this.recargarInventario();
  this.recargarInventarioColegio();
  }



  hacerPedido(){
  this.pedido = true;
  }
abrirFormularioCreacion() {
   this.pedido = true;
  this.inventarioParaEditar = null;  // No hay inventario a editar
  this.crearinventario = true;
}
  crearInventario(){
  this.crearinventario = true;
  }

  actualizarInventario() {
  console.log('Recargando inventario...');
  this.recargarInventario();
  this.recargarInventarioColegio();
}


  recargarInventario() {
  this.inventarioService.obtenerAlimentos(this.colegioRegistrado.token, this.colegioRegistrado.id).subscribe(
    (data: Food[]) => {
      this.comida = data;
      console.log('Alimentos actualizados:', this.comida);  // Verifica si los alimentos están siendo actualizados
    },
    (error) => {
      console.error('Error al obtener alimentos:', error);
    }
  );
}

  recargarInventarioColegio(){
  this.userService.listarInventarioColegio(this.colegioRegistrado.token ,this.colegioRegistrado.id).subscribe(
    (data: InventarioColegio[]) => {
      this.inventario = data;
      console.log(this.inventario)
    },
    (error) => {
      console.error('Error al obtener inventario:', error);
    }
  );
}
}
