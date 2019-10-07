import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { ListadoComponent } from './components/listado/listado.component';


const routes: Routes = [
  {
    path: 'Home',
    component: IngresoComponent
  },
  {
    path: 'Listado',
    component: ListadoComponent
  },
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
