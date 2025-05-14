import { Component,  Input, Output, EventEmitter } from '@angular/core';
import { Food } from '../models/food';
import { InventarioService } from '../services/inventario.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
@Component({
  selector: 'app-crear-producto-operador',
  standalone: false,
  templateUrl: './crear-producto-operador.component.html',
  styleUrl: './crear-producto-operador.component.css'
})



export class CrearProductoOperadorComponent {

@Output() cerrar = new EventEmitter<void>();
@Output() alimentoCreado = new EventEmitter<void>();

operadorRegistrado!: User;
nuevoAlimento = {
  name: '',
  description: '',
  type: ''

};

constructor(
    private userService: UserService,
    private inventarioService: InventarioService
  ){}

ngOnInit(){
  this.operadorRegistrado = this.userService.getUser();
}


cerrarModal() {
  this.cerrar.emit();
}

agregarAlimento() {
  const food = {
    ...this.nuevoAlimento,
    user: {
      idUser: this.operadorRegistrado.id
    }
  };

this.inventarioService.crearAlimento(food, this.operadorRegistrado.token, this.operadorRegistrado.id).subscribe({
  next: (res) => {
    console.log('Alimento creado:', res);
    this.nuevoAlimento = { name: '', description: '', type: '' };
    this.alimentoCreado.emit();
    this.cerrar.emit();
  },
  error: (err) => {
    console.error('Error al crear alimento:', err);
  }
  });
}

}

