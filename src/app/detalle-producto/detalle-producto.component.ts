import { Component, OnInit } from '@angular/core';
import { Inventario } from '../shared/models/inventario';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  constructor() { }
  detalleProducto : Inventario; 
  ngOnInit() {
  }

}
