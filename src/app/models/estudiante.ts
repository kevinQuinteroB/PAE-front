export class Estudiante {
    id?: number;
    nombre: string;
    apellido: string;
    correo: string;
    edad: number;
    fechaNacimiento: string;
    institucionId: number;
  
    constructor(
      nombre: string,
      apellido: string,
      correo: string,
      edad: number,
      fechaNacimiento: string,
      institucionId: number,
      id?: number
    ) {
      this.id = id;
      this.nombre = nombre;
      this.apellido = apellido;
      this.correo = correo;
      this.edad = edad;
      this.fechaNacimiento = fechaNacimiento;
      this.institucionId = institucionId;
    }
  }
  