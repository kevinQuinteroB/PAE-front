import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Complaint} from '../models/queja';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class QuejaService {
  private api = 'http://localhost:8080';


  constructor(
    private HttpClient: HttpClient,
  ) { }




  obtenerDatos(token: string, id: number) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    console.log("Buscando Queja")
    return this.HttpClient.get<Complaint[]>(`${this.api}/complaint/list/${id}`, { headers });
  }

  crearQueja(queja: any, token: string): Observable<Complaint> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.HttpClient.post<Complaint>(`${this.api}/complaint/create`, queja, { headers });
  }

  listarOrdenesPorEscuela(token: string,idSchool: number): Observable<Order[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.HttpClient.get<Order[]>(`${this.api}/orderfood/shool/${idSchool}`,{ headers });
  }

}
