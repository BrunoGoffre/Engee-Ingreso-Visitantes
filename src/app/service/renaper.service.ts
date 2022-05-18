import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RenaperService {
  renaper: BehaviorSubject<any> = new BehaviorSubject(
    [
      { apellido: "Goffredo", nombre: "Bruno", fechaNacimiento: "31-08-1999", dni: "41057131" },
      { apellido: "Almeida", nombre: "Dario", fechaNacimiento: "31-07-1999", dni: "42057132" },
      { apellido: "Pellegrini", nombre: "Diego", fechaNacimiento: "31-06-1999", dni: "43057133" },
      { apellido: "Musso", nombre: "Federico", fechaNacimiento: "31-05-1999", dni: "44057134" },
      { apellido: "Meza", nombre: "Ivan", fechaNacimiento: "31-04-1999", dni: "45057135" },
      { apellido: "Perez", nombre: "Ricardo", fechaNacimiento: "31-03-1999", dni: "46057136" }
    ]);

  constructor() { }

  GetVisitante(): Observable<any> {
    return this.renaper;
  }
}
