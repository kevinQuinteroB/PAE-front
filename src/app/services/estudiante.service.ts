import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Estudiante } from '../models/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private apiUrl = 'http://localhost:8080/student';

  constructor(private http: HttpClient) {}

  listarEstudiantesPorEscuela(token: string, idUser: number): Observable<Estudiante[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any[]>(`${this.apiUrl}/list/${idUser}`, { headers }).pipe(
      map(estudiantes => estudiantes.map(e => ({
        id: e.idStudent,
        name: e.name,
        lastName: e.lastName,
        grade: e.grade,
        user: e.user
      })))
    );
  }

  crearEstudiante(estudiante: Estudiante, token: string): Observable<Estudiante> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(`${this.apiUrl}/create`, estudiante, { headers }).pipe(
      map(e => ({
        id: e.idStudent,
        name: e.name,
        lastName: e.lastName,
        grade: e.grade,
        user: e.user
      }))
    );
  }

  actualizarEstudiante(estudiante: Estudiante, token: string): Observable<Estudiante> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(`${this.apiUrl}/update`, estudiante, { headers }).pipe(
      map(e => ({
        id: e.idStudent,
        name: e.name,
        lastName: e.lastName,
        grade: e.grade,
        user: e.user
      }))
    );
  }

  eliminarEstudiante(id: number, token: string): Observable<void> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`, { headers });
  }
}

