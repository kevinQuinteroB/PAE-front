export class Order {
    idOrder?: number;  // opcional, porque se genera automáticamente
  logistics!: {
    idUser: number;
  };
  school!: {
    idUser: number;
  };
  food!: {
    idFood: number;
  };
}
