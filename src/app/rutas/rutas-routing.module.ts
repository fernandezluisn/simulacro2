import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BienvenidaComponent} from '../componentes/bienvenida/bienvenida.component';
import {LoginComponent} from '../componentes/login/login.component';


const routes: Routes = [{path:"", component:BienvenidaComponent},
{path:"login", component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RutasRoutingModule { }
