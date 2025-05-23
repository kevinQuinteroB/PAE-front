  import { Component, OnInit } from '@angular/core';
  import { UserService } from '../services/user.service';
  import { EstudianteService } from '../services/estudiante.service';
  import { Estudiante } from '../models/estudiante';
  import { User } from '../models/user';

  @Component({
    selector: 'app-estudiante',
    templateUrl: './estudiante.component.html',
    standalone:false,
    styleUrls: ['./estudiante.component.css']
  })
  export class EstudianteComponent implements OnInit {
    estudiantes: Estudiante[] = [];
    colegioRegistrado!: User;

    constructor(
      private userService: UserService,
      private estudianteService: EstudianteService
    ) {}

    ngOnInit() {
      this.colegioRegistrado = this.userService.getUser();
      console.log('Token:', this.colegioRegistrado.token);
      this.cargarEstudiantes();
    }

    cargarEstudiantes() {
      this.estudianteService.listarEstudiantesPorEscuela(this.colegioRegistrado.token, this.colegioRegistrado.id).subscribe(
        (data: Estudiante[]) => {
          this.estudiantes = data;
        },
        (error) => {
          console.error('Error al obtener estudiantes:', error);
        }
      );
    }
  }