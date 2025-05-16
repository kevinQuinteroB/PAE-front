export class InventarioColegio {

        idInventoryOperator!: number;
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
    expirationDate!: string;  // Fecha de expiración en formato "YYYY-MM-DD"
    quantity!: number;
}
