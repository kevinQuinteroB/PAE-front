import { Component,  Input, Output, EventEmitter } from '@angular/core';
import { Food } from '../models/food';
import { InventarioService } from '../services/inventario.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-crear-producto-colegio',
  standalone: false,
  templateUrl: './crear-producto-colegio.component.html',
  styleUrl: './crear-producto-colegio.component.css'
})
export class CrearProductoColegioComponent {
@Output() cerrar = new EventEmitter<void>();
@Output() alimentoCreado = new EventEmitter<void>();

colegioResgistrado!: User;
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
  this.colegioResgistrado = this.userService.getUser();
}


cerrarModal() {
  this.cerrar.emit();
}

agregarAlimento() {
  const food = {
    ...this.nuevoAlimento,
    user: {
      idUser: this.colegioResgistrado.id
    }
  };

this.inventarioService.crearAlimento(food, this.colegioResgistrado.token, this.colegioResgistrado.id).subscribe({
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



