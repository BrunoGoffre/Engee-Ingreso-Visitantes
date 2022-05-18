import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Visitante } from 'src/app/models/visitante';
import { GrillaComponent } from 'src/app/components/grilla/grilla.component';
import { RenaperService } from 'src/app/service/renaper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(GrillaComponent) grillaComponent: GrillaComponent = new GrillaComponent();

  isSubmitted = false;
  visitante;
  nombreCompleto: string = "";
  sectores = ["QA", "RRHH", "COMERCIAL"];
  visitaA = [
    { nombre: "Daniel", apellido: "de Almeida", sector: "RRHH" },
    { nombre: "Dario", apellido: "Riva", sector: "QA" },
    { nombre: "Diego", apellido: "Pellegrini", sector: "COMERCIAL" },
    { nombre: "Federico", apellido: "Rodriguez", sector: "QA" },
    { nombre: "Lautaro Ariel", apellido: "Basanta", sector: "COMERCIAL" },
    { nombre: "Manuel", apellido: "Castello", sector: "RRHH" },
    { nombre: "Rocio", apellido: "Diaz", sector: "COMERCIAL" },
    { nombre: "Paula", apellido: "Barrios", sector: "QA" },
    { nombre: "Walter", apellido: "Parasis", sector: "RRHH" },
    { nombre: "Sebastian", apellido: "Marcote", sector: "QA" },
    { nombre: "Guillermo", apellido: "Balcarcel", sector: "COMERCIAL" },
    { nombre: "Esteban", apellido: "Gawron", sector: "RRHH" },
    { nombre: "Enzo", apellido: "Peddini", sector: "QA" },
    { nombre: "Andrea", apellido: "Russo", sector: "COMERCIAL" },
    { nombre: "Adrian", apellido: "Zarate", sector: "RRHH" },
    { nombre: "Melisa", apellido: "Yune", sector: "QA" },
    { nombre: "Nicolas", apellido: "Russmann", sector: "COMERCIAL" },
    { nombre: "Galo", apellido: "Trillo", sector: "RRHH" },
    { nombre: "Diego", apellido: "Pellegrini", sector: "QA" },
  ];
  visitaAFiltrado: Array<any> = [];

  constructor(private fb: FormBuilder, private renaper: RenaperService) {
    this.visitante = this.fb.group({
      // dni: ["", [Validators.required]],
      dni: new FormControl(""),
      nombreCompleto: new FormControl(""),
      numeroTajertaIngreso: new FormControl(""),
      fechaIngreso: new FormControl(""),
      HoraIngreso: new FormControl(""),
      sector: new FormControl(""),
      visitaA: new FormControl("")
    })
  }

  ngOnInit(): void {

  }

  CambiarSector(e: any) {
    this.sector?.setValue(e.target.value, {
      onlySelf: true,
    });
    this.ObtenerListaFiltrada(e.target.value);
  }
  CambiarVisita(e: any) {
    this.visita?.setValue(e.target.value, {
      onlySelf: true,
    });

  }
  get sector() {
    return this.visitante.get('sector');
  }
  get visita() {
    return this.visitante.get('visitaA')
  }

  Submit() {
    console.log("Visitante agregado");
    this.grillaComponent.agregaVisitante(this.visitante.value as Visitante);
  }

  ObtenerListaFiltrada(sector: string) {
    this.visitaA.forEach(item => {
      if (item.sector == sector) {
        this.visitaAFiltrado.push(item);
      }
    })
  }
  Consultar() {
    console.log();
    this.renaper.GetVisitante().subscribe(data => {
      (data as Array<any>).forEach(item => {
        if (this.visitante.value['dni'] == item.dni) {
          this.nombreCompleto = item.nombre + " " + item.apellido;
        }
      });
    }
    )
  }
}
