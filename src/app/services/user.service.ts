import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
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

  getUser(): User {
    return JSON.parse(localStorage.getItem('User') || '{}');
  }
}
