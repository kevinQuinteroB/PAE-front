import { Estudiante } from './estudiante';

describe('Estudiante', () => {
  it('should create an instance with correct properties', () => {
    const estudiante = new Estudiante(
      'Juan',
      'Pérez',
      '10',
    );

    expect(estudiante).toBeTruthy();
    expect(estudiante.name).toBe('Juan');
    expect(estudiante.lastName).toBe('Pérez');
    expect(estudiante.grade).toBe('40');
  });
});
