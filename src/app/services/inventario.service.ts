import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inventario } from '../models/inventario';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  private api = 'http://localhost:8080';

  constructor(
    private HttpClient: HttpClient
  ) { }

  obtenerAlimentos(token: string, id: number){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.HttpClient.get<Inventario[]>(`${this.api}/food/list/${id}`, { headers });
  }
}
