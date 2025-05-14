export class InventarioOperador {
    idInventoryOperator!: number;
    logistics!: {
        idUser: number;
        name: string;
        email: string;
        address: string;
        rol: string;
        password: string;
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
    expirationDate!: string;  // Fecha de expiración en formato "YYYY-MM-DD"
    quantity!: number;
}
