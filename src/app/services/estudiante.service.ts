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
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  obtenerEstudiantes(token: string, schoolId: number): Observable<Estudiante[]> {
    const headers = this.crearHeaders(token);
    return this.http.get<Estudiante[]>(`${this.apiUrl}/list/${schoolId}`, { headers });
  }

  crearEstudiante(estudiante: Estudiante, token: string): Observable<Estudiante> {
    const headers = this.crearHeaders(token);
    return this.http.post<Estudiante>(`${this.apiUrl}/create`, estudiante, { headers });
  }

  actualizarEstudiante(estudiante: Estudiante, token: string): Observable<Estudiante> {
    const headers = this.crearHeaders(token);
    return this.http.put<Estudiante>(`${this.apiUrl}/update/${estudiante.id}`, estudiante, { headers });
  }

  eliminarEstudiante(id: number, token: string): Observable<void> {
    const headers = this.crearHeaders(token);
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`, { headers });
  }
}
