import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainOperadorComponent } from './main-operador/main-operador.component';
import { OperadorBusquedaComponent } from './operador-busqueda/operador-busqueda.component';
import { QuejasOperadorComponent } from './quejas-operador/quejas-operador.component';
import { InfoColegioOperadorComponent } from './info-colegio-operador/info-colegio-operador.component';
import { MainColegioComponent } from './main-colegio/main-colegio.component';
import { ColegioBusquedaComponent } from './colegio-busqueda/colegio-busqueda.component';
import { QuejasColegioComponent } from './quejas-colegio/quejas-colegio.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { EncuestaColegioComponent } from './encuesta-colegio/encuesta-colegio.component';
import { PedidoOperadorComponent } from './pedido-operador/pedido-operador.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InventarioOperadorComponent } from './inventario-operador/inventario-operador.component';
import { InventarioColegioComponent } from './inventario-colegio/inventario-colegio.component';
import { CrearProductoOperadorComponent } from './crear-producto-operador/crear-producto-operador.component';
import { CrearInventarioOperadorComponent } from './crear-inventario-operador/crear-inventario-operador.component';
import { CrearQuejaComponent } from './crear-queja/crear-queja.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainOperadorComponent,
    OperadorBusquedaComponent,
    QuejasOperadorComponent,
    InfoColegioOperadorComponent,
    MainColegioComponent,
    ColegioBusquedaComponent,
    QuejasColegioComponent,
    EstudiantesComponent,
    EncuestaColegioComponent,
    PedidoOperadorComponent,
    InventarioOperadorComponent,
    InventarioColegioComponent,
    CrearProductoOperadorComponent,
    CrearInventarioOperadorComponent,
    CrearQuejaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
