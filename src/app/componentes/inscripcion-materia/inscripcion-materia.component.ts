import { Component, OnInit } from '@angular/core';
import { BdaService } from '../../servicio/bda.service';
import { Materia } from '../../clases/Materia';
import { Inscripcion } from '../../clases/Inscripcion';
import { ServiceService } from '../../servicio/service.service';
import { Alumno } from 'src/app/clases/Alumno';
import { persona } from 'src/app/clases/persona';

@Component({
  selector: 'app-inscripcion-materia',
  templateUrl: './inscripcion-materia.component.html',
  styleUrls: ['./inscripcion-materia.component.css']
})
export class InscripcionMateriaComponent implements OnInit {
  listaInscripciones;
  listaMaterias;
  nombre:string;
  alumno;
  constructor(private bdaService:BdaService, private service:ServiceService) {
    this.bdaService.devolverListadoMaterias().subscribe(lista => {
      this.listaMaterias = lista;       
       
      });

      this.bdaService.devolverListadoInscripciones().subscribe(lista => {
        this.listaInscripciones = lista;       
        
        });

      this.service.tomarUsuario().then(res=>this.alumno=res);
   }

  ngOnInit(): void {
  }

  inscribir(){
    console.log(this.alumno.email, this.nombre);
    let m=new Inscripcion( this.alumno.email,this.nombre);
    let a:boolean=false;
    this.listaInscripciones.forEach(element => {
      if(element.alumno==m.alumno && element.materia==m.materia)
      a=true;      
    });
    if(a==false)
    this.bdaService.createInscripcion(m);
    else{
      alert("El alumno ya se encuentra inscripto a la materia.");
    }
  }
}
