import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Visitante } from 'src/app/models/visitante';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.scss']
})
export class GrillaComponent implements OnInit {


  @Input() Visitante: any;
  ListaVisitantes: Array<Visitante>;


  constructor() {
    this.ListaVisitantes = new Array<Visitante>();
  }

  ngOnInit(): void {
    this.CargarVisitantes();
  }

  CargarVisitantes() {
    this.ListaVisitantes.push(new Visitante(1, "41057136", 11111, "2022-25-13", "10:10", "Bruno Goffredo"));
    this.ListaVisitantes.push(new Visitante(2, "42058137", 22222, "2022-25-14", "13:20", "Dario Almeida"));
    this.ListaVisitantes.push(new Visitante(3, "43057138", 33333, "2022-25-15", "11:30", "Diego Pellegrini"));
    this.ListaVisitantes.push(new Visitante(4, "44057136", 44444, "2022-25-16", "15:40", "Federico Musso"));
    this.ListaVisitantes.push(new Visitante(5, "45057136", 55555, "2022-25-17", "9:50", "Laura Rodriguez"));
  }

  public agregaVisitante(visitante: Visitante) {
    visitante.id = this.ListaVisitantes.length + 1;
    this.ListaVisitantes.push(visitante);
  }

  BorrarVisitante(item: Visitante) {
    if (confirm("Desea eliminar este visitante? ")) {

      this.ListaVisitantes.forEach(visitante => {
        if (visitante.id == item.id) {
          this.ListaVisitantes.splice(this.ListaVisitantes.indexOf(visitante), 1)
        }
      })
    }
  }
}
