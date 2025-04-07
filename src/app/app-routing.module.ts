import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainOperadorComponent } from './main-operador/main-operador.component'
import { MainColegioComponent } from './main-colegio/main-colegio.component';

const routes: Routes = [
  { path:'', redirectTo:'/login', pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'operador', component: MainOperadorComponent },
  { path: 'colegio', component: MainColegioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
