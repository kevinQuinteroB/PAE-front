import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
    private api = 'http://localhost:8080/orderfood'; // Ajusta la URL base según tu backend


  constructor(private http: HttpClient) {}

    crearOrden(order: Order, token: string): Observable<Order> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.post<Order>(`${this.api}/create`, order, { headers });
  }
  updateOrder(order: Order, token: string): Observable<Order> {
        const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.put<Order>(`${this.api}/update`, order,{ headers });
  }
}
