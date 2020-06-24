import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Materia } from 'src/app/clases/Materia';
import { BdaService } from 'src/app/servicio/bda.service';
import { element } from 'protractor';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-detalle-materia',
  templateUrl: './detalle-materia.component.html',
  styleUrls: ['./detalle-materia.component.css']
})
export class DetalleMateriaComponent implements OnInit {

  listaInscripcionesA;
  @Input() materia:Materia;
  constructor(private bda:BdaService) {
    this.listaInscripcionesA=new Array();
    this.llenarInscripciones();
   
   }

   

  ngOnInit(): void {
  
  }

  llenarInscripciones(){
    this.listaInscripcionesA=new Array();
    this.bda.devolverListadoInscripciones().subscribe(listaI=>{
      this.bda.devolverListadoAlumnos().subscribe(listaA=>{
        listaI.filter(elementI=>{
          if(elementI.materia.toLowerCase()==this.materia.nombre.toLowerCase())
            listaA.forEach(alumno=>{
              if(alumno.email.toLowerCase()==elementI.alumno.toLowerCase())
              this.listaInscripcionesA.push(alumno);
            })
          
        })
      })
      
    });
  }

  ngOnChanges(changes: SimpleChanges) {

    this.llenarInscripciones();
    // You can also use categoryId.previousValue and 
    // categoryId.firstChange for comparing old and new values

}

}
