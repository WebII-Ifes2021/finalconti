import { Component, Input, OnInit,Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css'],
})
export class DatosComponent implements OnInit {

  @Input() infoVenta: any;
  @Output() eventoPrecioFinal = new EventEmitter<number>();

  precioFinal: number;
  porcentaje: number;
 
  constructor() { }

  ngOnInit(): void {}

  calcularPrecioFinal(){
    this.precioFinal = this.infoVenta.precio*this.porcentaje;
      this.eventoPrecioFinal.emit(this.precioFinal);
    }

}
