import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu, Food } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = 'http://localhost:8080/menu'; // Adjust as needed
  private foodApiUrl = 'http://localhost:8080/food'; // Adjust as needed

  constructor(private http: HttpClient) {}

  listMenus(idUser: number, token: string): Observable<Menu[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Menu[]>(`${this.apiUrl}/list/${idUser}`, { headers });
  }

  createMenu(menu: Menu, token: string): Observable<Menu> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.post<Menu>(`${this.apiUrl}/create`, menu, { headers });
  }

  deleteMenu(id: number, token: string): Observable<void> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`, { headers });
  }

  listFoods(idUser: number, token: string): Observable<Food[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Food[]>(`${this.foodApiUrl}/list/${idUser}`, { headers });
  }
}