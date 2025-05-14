import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inventario } from '../models/inventario';
import { Food } from '../models/food';
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
    return this.HttpClient.get<Food[]>(`${this.api}/food/list/${id}`, { headers });
  }

  crearAlimento(food: Food,token: string, id: number){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.HttpClient.post(`${this.api}/food/create`, food , { headers });
  }

  crearInventario(inventario: Inventario, token: string){
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  console.log(token)
  return this.HttpClient.post(`${this.api}/inventaryoperator/create`, inventario, { headers });
}

}
