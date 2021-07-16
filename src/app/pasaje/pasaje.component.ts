import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-pasaje',
  templateUrl: './pasaje.component.html',
  styleUrls: ['./pasaje.component.css']
})
export class PasajeComponent implements OnInit {

  ventaForm: FormGroup;
  venta : any;
  mostrar = false;
  precioFinal: number;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initVentaForm();
  }

  initVentaForm(){
    this.ventaForm = this.fb.group({
      nombre: [''],      
      fechaVenta: [''],
      destino: [''],
      precio: ['']
    })
  }

  guardarDatos(){
    this.venta = this.ventaForm.value;
  }

  onRecibe(event: number){
    this.mostrar = true;
    this.precioFinal = event;
  }

}
