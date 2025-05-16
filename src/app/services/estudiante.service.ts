import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from '../models/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private apiUrl = 'http://localhost:8080/student';

  constructor(private http: HttpClient) {}

  private crearHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

  obtenerEstudiantes(token: string, id: number): Observable<Estudiante[]> {
    const headers = this.crearHeaders(token);
    return this.http.get<Estudiante[]>(`${this.apiUrl}/list/${id}`, { headers });
  }

  crearEstudiante(estudiante: Estudiante, token: string): Observable<Estudiante> {
    const headers = this.crearHeaders(token);
    return this.http.post<Estudiante>(`${this.apiUrl}/create`, estudiante, { headers });
  }

  actualizarEstudiante(estudiante: Estudiante, token: string): Observable<Estudiante> {
    const headers = this.crearHeaders(token);
    return this.http.post<Estudiante>(`${this.apiUrl}/update`, estudiante, { headers });
  }

  eliminarEstudiante(id: number, token: string): Observable<void> {
    const headers = this.crearHeaders(token);
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`, { headers });
  }
}
