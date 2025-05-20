export class InventarioColegio {

  idInventorySchool?: number; // opcional para POST
  school!: {
    idUser: number;
  };
  food!: {
        idFood: number;
        user: {
        idUser: number;
        name: string;
        email: string;
        address: string;
        rol: string;
        password: string;
        };
        name: string;
        description: string;
        type: string;
  };
  expirationDate!: string; // formato "YYYY-MM-DD"
  quantity!: number;
}
