export class Estudiante {
  id?: number;
  name: string;
  lastName: string;
  grade: string;
  schoolId?: number;

  constructor(
    name: string,
    lastName: string,
    grade: string,
    id?: number,
    schoolId?: number
  ) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.grade = grade;
    this.schoolId = schoolId;
  }
}
