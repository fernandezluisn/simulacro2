import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RutasRoutingModule} from './rutas/rutas-routing.module';

import { AppComponent } from './app.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { AltaUsuarioComponent } from './componentes/alta-usuario/alta-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    AltaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    RutasRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
