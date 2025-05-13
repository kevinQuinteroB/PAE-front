import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { InventarioOperador} from "../models/inventario-operador";
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api = 'http://localhost:8080';

  constructor(
    private HttpClient: HttpClient,
    private router: Router,
  ) { }

  listarInventarioOperador(token: string, id: number): Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.HttpClient.get<InventarioOperador[]>(`${this.api}/inventaryoperator/list/${id}`, { headers })
  }

  autenticarUser(User: any): Observable<any> {
    console.log(User)
    return this.HttpClient.post<User>(`${this.api}/auth/login`, User)
      .pipe(
        tap(User => {
          
          localStorage.setItem('UserGuardando', JSON.stringify(User));
          if(User.rol === "[ROLE_USER_LOGISTICS]"){
            this.router.navigate(['/operador']);
          }else if(User.rol === "[ROLE_USER_SCHOOL]"){
            this.router.navigate(['/colegio']);
          }
          
        })
      );
  }

  listarColegios(): Observable<User[]>{
    return this.HttpClient.get<User[]>(`${this.api}/user/list`)
  }

  buscarNombreColegio(nombre:string): Observable<User[]>{
    return this.HttpClient.get<User[]>(`${this.api}/user/listname/${nombre}`)
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem('UserGuardando') || '{}');
  }
}
