import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {RutasRoutingModule} from './rutas/rutas-routing.module';
import {AngularFireModule} from '@angular/fire'; 
import {environment} from '../environments/environment';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
//import {RecaptchaModule, RecaptchaFormsModule} from 'ng-recaptcha';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceService } from './servicio/service.service';
import {BdaService} from './servicio//bda.service';

import { AppComponent } from './app.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { AltaUsuarioComponent } from './componentes/alta-usuario/alta-usuario.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavComponent } from './componentes/nav/nav.component';
import { HomeComponent } from './componentes/home/home.component';
import { AltaMateriaComponent } from './componentes/alta-materia/alta-materia.component';
import { TablaProfesoresComponent } from './componentes/tabla-profesores/tabla-profesores.component';
import { TablaMateriasComponent } from './componentes/tabla-materias/tabla-materias.component';
import { TablaUsuariosComponent } from './componentes/tabla-usuarios/tabla-usuarios.component';
import { FiltroUComponent } from './componentes/filtro-u/filtro-u.component';
import { InscripcionMateriaComponent } from './componentes/inscripcion-materia/inscripcion-materia.component';
import { TablaInscripcionesComponent } from './componentes/tabla-inscripciones/tabla-inscripciones.component';
import { NotaPipe } from './pipes/nota.pipe';
import { MateriasDirective } from './directiva/materias.directive';
import { DetalleMateriaComponent } from './componentes/detalle-materia/detalle-materia.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    AltaUsuarioComponent,
    LoginComponent,
    NavComponent,
    HomeComponent,
    AltaMateriaComponent,
    TablaProfesoresComponent,
    TablaMateriasComponent,
    TablaUsuariosComponent,
    FiltroUComponent,
    InscripcionMateriaComponent,
    TablaInscripcionesComponent,
    NotaPipe,
    MateriasDirective,
    DetalleMateriaComponent
  ],
  imports: [
    BrowserModule,
    RutasRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,    
    AngularFireStorageModule
  ],
  providers: [ServiceService, AngularFireAuth, BdaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
