import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  public propiedadDesdeHijoUno;
  public propiedadDesdeHijoDos;
  public propiedadDesdeHijoTres;
  public propiedadDesdeHijoCuatro;

  public nombre = 'Gerardo Veliz';
  public data = {
      id: 1,
      edad: 33,
      lenguaje: 'Angular'
  };

  constructor() { }

  ngOnInit() {
  }

  recibirDatos(event) {
    this.propiedadDesdeHijoUno = event.nombre;
    this.propiedadDesdeHijoDos = event.apellido;
    this.propiedadDesdeHijoTres = event.comida;
    this.propiedadDesdeHijoCuatro = event;
  }

}
