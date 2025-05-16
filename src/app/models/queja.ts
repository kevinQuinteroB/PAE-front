export class Complaint {
    idQueja?: number;
    comment!: string;
    status!: string;
    creationDate!: string;
    school!: {
    "idUser": number
}
    order!: {
    "idOrder": number
}

}
