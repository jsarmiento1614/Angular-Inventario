import { Component, OnInit } from '@angular/core';
import { Inventario } from '../shared/models/inventario';
import { InventarioMock } from '../shared/inventario-mock';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  constructor() { }
  arrayInventario: Array<Inventario>; // declarar el arreglo.
  productoSelecionado: Inventario;

  ngOnInit() {
    this.arrayInventario= InventarioMock;
  }

  onDetalles(product: Inventario): void{
    this.productoSelecionado = product;
  
    }
    

  offDetalles():void{
    this.productoSelecionado = null;
  }
  restarCantidad():void{
    if (this.productoSelecionado.cantidadPoductDisponible === 0) {
      alert('stock vacío');

    }else{
      this.productoSelecionado.cantidadPoductDisponible -= 1;
    }
  }

}
