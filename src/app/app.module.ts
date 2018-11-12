import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InventarioComponent } from './inventario/inventario.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    InventarioComponent,
    DetalleProductoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
