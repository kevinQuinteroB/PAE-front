export class Order {
  idOrder?: number;  // Opcional, generado automáticamente

  logistics!: {
    idUser: number;
  };

  school!: {
    idUser: number;
  };

  food!: {
    idFood: number;
    name?: string;          // opcional si deseas mostrarlo
    description?: string;   // opcional
  };

  quantity!: number;

  status!: string; // "enviada", "recibida", "cancelada"

  deliveryDate!: string;  // formato ISO: "yyyy-mm-dd"

  comment!: string;

  creationDate!: string;  // también formato ISO
}

