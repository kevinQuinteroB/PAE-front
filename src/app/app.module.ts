import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainOperadorComponent } from './main-operador/main-operador.component';
import { OperadorBusquedaComponent } from './operador-busqueda/operador-busqueda.component';
import { QuejasOperadorComponent } from './quejas-operador/quejas-operador.component';
import { InfoColegioOperadorComponent } from './info-colegio-operador/info-colegio-operador.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainOperadorComponent,
    OperadorBusquedaComponent,
    QuejasOperadorComponent,
    InfoColegioOperadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
