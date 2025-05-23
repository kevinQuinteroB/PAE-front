import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from '../models/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private apiUrl = 'http://localhost:8080/student'; // Adjust the base URL as needed

  constructor(private http: HttpClient) {}

  // List students for a specific school (user)
  listarEstudiantesPorEscuela(token: string, idUser: number): Observable<Estudiante[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Estudiante[]>(`${this.apiUrl}/list/${idUser}`, { headers });
  }

  // Create a new student
  crearEstudiante(estudiante: Estudiante, token: string): Observable<Estudiante> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.post<Estudiante>(`${this.apiUrl}/create`, estudiante, { headers });
  }

  // Update an existing student
  actualizarEstudiante(estudiante: Estudiante, token: string): Observable<Estudiante> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.post<Estudiante>(`${this.apiUrl}/update`, estudiante, { headers });
  }

  // Delete a student by ID
  eliminarEstudiante(id: number, token: string): Observable<void> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`, { headers });
  }
}