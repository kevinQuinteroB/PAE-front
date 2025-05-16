import { Estudiante } from './estudiante';

describe('Estudiante', () => {
  it('should create an instance with correct properties', () => {
    const estudiante = new Estudiante(
      'Juan',
      'Pérez',
      'juan.perez@mail.com',
      20,
      '2005-01-01',
      1,
      123
    );

    expect(estudiante).toBeTruthy();
    expect(estudiante.nombre).toBe('Juan');
    expect(estudiante.apellido).toBe('Pérez');
    expect(estudiante.correo).toBe('juan.perez@mail.com');
    expect(estudiante.edad).toBe(20);
    expect(estudiante.fechaNacimiento).toBe('2005-01-01');
    expect(estudiante.institucionId).toBe(1);
    expect(estudiante.id).toBe(123);
  });
});
