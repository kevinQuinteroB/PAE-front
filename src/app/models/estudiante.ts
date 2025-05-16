export class Estudiante {
    id?: number;
    name: string;
    lastName: string;
    grade: string;

    constructor(
        name: string,
        lastName: string,
        grade: string,
      id?: number
    ) {
      this.id = id;
      this.name = name;
      this.lastName = lastName;
      this.grade = grade;
    }
  }
  