import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BienvenidaComponent} from '../componentes/bienvenida/bienvenida.component';


const routes: Routes = [{path:"", component:BienvenidaComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RutasRoutingModule { }
