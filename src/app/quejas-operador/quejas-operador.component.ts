import { Component } from '@angular/core';
import { Complaint} from '../models/queja';
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
  quejas: Complaint[] = [];
  token!: string;

constructor(
    private quejaService: QuejaService,
    private userService: UserService, 
  ){}

  operadorRegistrado!: User;
  
  ngOnInit() {
    this.operadorRegistrado = this.userService.getUser();

    if (this.operadorRegistrado) {
      console.log(this.user)
        this.quejaService.obtenerDatos(this.operadorRegistrado.token, 2 ).subscribe({
          next: (queja) => {
            this.quejas = queja;
            console.log(this.quejas);
          }
        })
      
    }
  }
  
}
