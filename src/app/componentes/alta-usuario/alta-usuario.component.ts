import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/clases/Alumno';

import { isNull } from 'util';
import { ServiceService } from '../../servicio/service.service';
import { BdaService } from 'src/app/servicio/bda.service';
import { persona } from 'src/app/clases/persona';
import { Router } from '@angular/router';
import { Administrador } from 'src/app/clases/Administrador';
import { Profesor } from 'src/app/clases/Profesor';



@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent implements OnInit {

  email:string;
  nombre:string;
  clave1:string;
  clave2:string;
  tipoU:string;

  constructor(private servicio:ServiceService, private bda:BdaService, private router:Router) {
    this.tipoU="Alumno";
    this.email="";
    this.nombre="";
   }

  ngOnInit(): void {
  }

  registrar(){
    if(this.clave1==this.clave2 && !(isNull(this.clave1) || this.clave1=="" || this.nombre==""))
    {
        switch(this.tipoU){
          case "Alumno":
            this.servicio.registrarUsuario(this.email, this.clave2).then(async (res)=>{
              let r= "usuario registrado exitosamente";
              let u=new persona(this.email, this.tipoU, this.nombre);
              let a=new Alumno(this.email, this.tipoU, this.nombre);
              try {
                this.bda.createUsuario(u);
                this.bda.createAlumno(a);
                this.router.navigate(['home']);
              }catch(error){
                r=r+" "+error;            
              }
              alert(r);
            }
            )
            break;
            case "Administrador":
              this.servicio.registrarUsuario(this.email, this.clave2).then(async (res)=>{
                let r= "usuario registrado exitosamente";
                let u=new persona(this.email, this.tipoU, this.nombre);
                let a=new Administrador(this.email, this.tipoU, this.nombre);
                try {
                  this.bda.createUsuario(u);
                  this.bda.createAdministrador(a);
                  this.router.navigate(['home']);
                }catch(error){
                  r=r+" "+error;            
                }
                alert(r);
              }
              )
              break;
              case "Docente":
                this.servicio.registrarUsuario(this.email, this.clave2).then(async (res)=>{
                  let r= "usuario registrado exitosamente";
                  let u=new persona(this.email, this.tipoU, this.nombre);
                  let a=new Profesor(this.email, this.tipoU, this.nombre);
                  try {
                    this.bda.createUsuario(u);
                    this.bda.createEmpleado(a);
                    this.router.navigate(['home']);
                  }catch(error){
                    r=r+" "+error;            
                  }
                  alert(r);
                }
                )
                break;
        }
      
        
      
      
    }else{
      alert("Las claves no han sido ingresadas correctamente. O falta llenar campos");
    }
    
    
    
  }

}
