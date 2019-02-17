import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  // Recibe la propiedad desde el padre con @Input
  @Input() propiedad_uno: string;
  @Input() propiedad_dos: string;
  @Input() propiedad_tres: string;
  @Input() propiedad_cuatro: string;

  // Envia una propiedad al padre con @Output y EventEmitter
  @Output() hacia_el_padre = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  enviar() {
    this.hacia_el_padre.emit(
      {
        nombre: 'Gerado (Componente Padre)',
        apellido: 'Veliz',
        comida: 'Pastas',
      }
    );
  }

}
