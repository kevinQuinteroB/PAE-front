import { Component } from '@angular/core';
import { Queja } from '../models/queja';
import { QuejaService } from '../services/queja.service';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-quejas-operador',
  standalone: false,
  templateUrl: './quejas-operador.component.html',
  styleUrl: './quejas-operador.component.css'
})
export class QuejasOperadorComponent {
  user: User | null = null;
  quejas: Queja[] = [];
  token!: string;

constructor(
    private quejaService: QuejaService,
    private userService: UserService, 
  ){}

  operadorRegistrado!: User;
  
  ngOnInit() {
    this.operadorRegistrado = this.userService.getUser();
  
    if (this.operadorRegistrado) {
      if(this.user){
        this.token = this.user.token;
        this.quejaService.obtenerDatos(this.token, this.operadorRegistrado.id).subscribe({
          next: (queja) => {
            this.quejas = queja;
            console.log(this.quejas);
          }
        })
      }
    }
  }
  
}
