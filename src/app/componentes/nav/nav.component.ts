import { Component, OnInit } from '@angular/core';
import { isNull } from 'util';

import { ServiceService } from '../../servicio/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  listaE;
  listaU;
  user;
  logeado:boolean=false;
  tipoU;
  constructor(private service:ServiceService, private router:Router) { 
    
    this.user=this.service.tomarUsuario().then(res=>this.user=res);

    if(isNull(this.user) || this.user=="undefined")
    this.logeado=false;
    else
    this.logeado=true;
  }

  ngOnInit(): void {
    

    if(isNull(this.user) || this.user=="undefined")
    this.logeado=false;
    else
    this.logeado=true;

    console.log("hay usuario nav "+this.user);
  }

  cerrar(){
    try{
      this.service.logOutUser();
      alert("se ha cerrado la sesión");
      this.router.navigate(['/']);
    }catch(err){
      alert(err);
    }
    
  }

}
