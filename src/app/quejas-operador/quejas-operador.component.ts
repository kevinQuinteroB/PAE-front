import { Component } from '@angular/core';
import { Queja } from '../models/queja';
import { QuejaService } from '../services/queja.service';
import { User } from '../models/user';

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
    private quejaService: QuejaService 
  ){}

  ngOnInit() {
    const storedUser = localStorage.getItem("UserGuardando");
  
    if (storedUser) {
      this.user = JSON.parse(storedUser);
      if(this.user){
        this.token = this.user.token;
        this.quejaService.obtenerDatos(this.token, 5).subscribe({
          next: (queja) => {
            this.quejas = queja;
            console.log(this.quejas);
          }
        })
      }
    }
  }
  
}
