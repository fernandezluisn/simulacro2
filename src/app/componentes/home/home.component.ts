import { Component, OnInit, Input } from '@angular/core';
import { BdaService } from '../../servicio/bda.service';
import { ServiceService } from '../../servicio/service.service';
import { Profesor } from '../../clases/Profesor';
import { persona } from '../../clases/persona';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Materia } from 'src/app/clases/Materia';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  materiaS:Materia;
  @Input()tipoF:string;
  userL;
  userR;
  listaUsuarios;
  tipoAdmin:boolean;
  tipoDoc:boolean;
  tipoAlum:boolean;
  alta:boolean;
  usu:boolean;
  doc: boolean;
  seleccion=false;
  docenteSeleccionado:Profesor;
  
  listaBI;
  listaMaterias;
  listaMateriasFiltrado;
  listaAlumnosInscriptos;

  constructor(private bdaservice:BdaService, private service:ServiceService) { 
    
    this.alta=true;
    this.usu=false;
    this.doc=false;
    this.userL=this.service.tomarUsuario().then(res=>this.userL=res);
    this.listaBI=new Array();
    this.listaMateriasFiltrado=new Array();

    this.bdaservice.devolverListadoUsuarios().subscribe(lista => {
      this.listaUsuarios = lista;
      console.log(this.listaUsuarios); 
      lista.forEach(element => {
        if(element.email.toLowerCase()==this.userL.email.toLowerCase())
        {
          this.userR=element;   
          
          if(this.userR.tipo=="Administrador")
          {
            this.tipoAdmin=true;  
            this.tipoAlum=false;
            this.tipoDoc=false;
            

            this.bdaservice.devolverListadoMaterias().subscribe(lista => {
              this.listaMaterias = lista;       
              
              });

              
          }else if(this.userR.tipo=="Docente")
          {
            this.tipoAdmin=false;  
            this.tipoAlum=false;
            this.tipoDoc=true;
            this.listaAlumnosInscriptos=new Array();
            this.bdaservice.devolverListadoMaterias().subscribe(lista => {
              lista.filter(element=>{
                if(element.profesorEmail.toLowerCase()==this.userL.email.toLowerCase()){
                  this.listaMateriasFiltrado.push(element);
                }
              });       
              
              this.bdaservice.devolverListadoInscripciones().subscribe(lista => {
      
                   lista.forEach(element=>{
                     this.listaMateriasFiltrado.forEach(elementB => {
                       if(elementB.nombre.toLowerCase()==element.materia.toLowerCase())
                       {
                          this.bdaservice.devolverListadoAlumnos().subscribe(lista=>{
                            lista.filter(elementC=>{
                              if(elementC.email.toLowerCase()==element.alumno.toLowerCase()){
                                this.listaAlumnosInscriptos.push(elementC);
                              }
                            })
                          });
                       }
                     });
                   })
               
                });
              });
            
          }else
          {
            this.tipoAdmin=false;  
            this.tipoAlum=true;
            this.tipoDoc=false;

            this.bdaservice.devolverListadoInscripciones().subscribe(lista => {
      
                   
              lista.filter(element=>{
                if(element.alumno==this.userL.email)
                {          
                  this.listaBI.push(element);
                  
                }
                console.log(this.listaBI);
            });
              });
          }
         
         
        }
        
      });
    
    })

      
  }

  ngOnInit(): void {
    
   
  }

  cambiarP(){
    this.alta=true;
    this.usu=false;
    this.doc=false;
  }

  cambiarE(){
    this.alta=false;
    this.usu=false;
    this.doc=true;
  }

  cambiarU(){
    this.alta=false;
    this.usu=true;
    this.doc=false;

  }

  

  tomarDocenteParaDetalles(docente)
  {
   
  this.docenteSeleccionado=docente;   
 
  this.seleccion=true;
  }

  tomarMateriaParaDetalles(materia:Materia)
  {
   
  this.materiaS=materia;   
 
  this.seleccion=true;
  }

  tomarFiltroParaDetalles(tipo)
  {   
  this.tipoF=tipo;  
    this.filtrar();
  
  }
  
  filtrar(){
    let listadoFiltrado:persona[]=new Array();
    if(this.tipoF!="Todos")
    {
      let listaB;
      this.bdaservice.devolverListadoUsuarios().subscribe(lista => {
        listaB = lista;       
        listadoFiltrado=listaB.filter(element=>{
          if(element.tipo==this.tipoF)
          {
            listadoFiltrado.push(element);
            console.log(element);
          }
          this.listaUsuarios=listadoFiltrado;
      });
        });
      
     
    }else{
      this.bdaservice.devolverListadoUsuarios().subscribe(lista => {
        this.listaUsuarios = lista;       
        
        });
    }

}
}
