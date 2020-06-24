import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BienvenidaComponent} from '../componentes/bienvenida/bienvenida.component';
import {LoginComponent} from '../componentes/login/login.component';
import {AltaUsuarioComponent} from '../componentes/alta-usuario/alta-usuario.component';
import {HomeComponent} from '../componentes/home/home.component';


import {redirectUnauthorizedTo, canActivate} from "@angular/fire/auth-guard";

const redirectUnauthorizedToLogin=()=>redirectUnauthorizedTo(["login"]);


const routes: Routes = [{path:"", component:BienvenidaComponent},
{path:"login", component:LoginComponent},
{path:"alta", component:AltaUsuarioComponent},
{path:"home", component:HomeComponent, ...canActivate(redirectUnauthorizedToLogin)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RutasRoutingModule { }
