export interface Menu {
  idMenu?: number;
  school: {
    idUser: number;
  };
  alimentos: {
    idFood: number;
  }[];
}
export interface Food {
  idFood: number;
  name?: string; // Optional, for display in the form
}