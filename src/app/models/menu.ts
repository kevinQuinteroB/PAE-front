export class Menu {
    idMenu?: number;  // Puedes cambiar el nombre si tu backend devuelve otro ID

  school!: {
    idUser: number; // Representa la relación ManyToOne con User
  };

  alimentos!: {
    idFood: number;
    name: string;
    description: string;
    type: string;
  }[]; // Lista de alimentos (ManyToMany)
}
