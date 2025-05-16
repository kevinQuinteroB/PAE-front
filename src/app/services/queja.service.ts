import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Queja } from '../models/queja';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

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
    return this.HttpClient.get<Queja[]>(`${this.api}/complaint/list/${id}`, { headers });
  }

    crearQueja(queja: any, token: string): Observable<Queja> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.HttpClient.post<Queja>(`${this.api}/complaint/create`, queja, { headers });
  }
}
