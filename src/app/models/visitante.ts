export class Visitante {
    id: number;
    dni: string;
    numeroTajertaIngreso: number;
    fechaIngreso: string;
    HoraIngreso: string;
    visitaA: string;



    constructor(id: number, dni: string, numeroTajertaIngres: number, fechaIngreso: string, HoraIngreso: string, visitaA: string) {
        this.id = id;
        this.dni = dni;
        this.numeroTajertaIngreso = numeroTajertaIngres;
        this.fechaIngreso = fechaIngreso;
        this.HoraIngreso = HoraIngreso;
        this.visitaA = visitaA;
    }
}
