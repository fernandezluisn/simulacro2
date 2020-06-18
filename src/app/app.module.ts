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

import { AppComponent } from './app.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { AltaUsuarioComponent } from './componentes/alta-usuario/alta-usuario.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavComponent } from './componentes/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    AltaUsuarioComponent,
    LoginComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RutasRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,    
    AngularFireStorageModule
  ],
  providers: [ServiceService, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
