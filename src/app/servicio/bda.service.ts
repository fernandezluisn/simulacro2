import { Injectable } from '@angular/core';
import {AngularFirestore, DocumentReference} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Alumno} from '../clases/Alumno';
import {Profesor} from '../clases/Profesor';
import { persona } from '../clases/persona';
import { Administrador } from '../clases/Administrador';
import { Materia } from '../clases/Materia';
import { Inscripcion } from '../clases/Inscripcion';


@Injectable({
  providedIn: 'root'
})
export class BdaService {

  listaAlumnos:Observable<Alumno[]>;
  
  listaProfesores:Observable<Profesor[]>;

  listaUsuarios:Observable<persona[]>;

 

  listaMateria:Observable<Materia[]>;

  listaInscripciones:Observable<Inscripcion[]>;

  constructor(private db:AngularFirestore ) {

    
    this.listaProfesores=this.db.collection('profesores').snapshotChanges().pipe(
      map(actions=>{
        return actions.map(
          a=>{
            const data= a.payload.doc.data();
            const id=a.payload.doc.id;
            return {id, ...(data as any)}
          }
        );
      }

      )

     
    );

    this.listaMateria=this.db.collection('materias').snapshotChanges().pipe(
      map(actions=>{
        return actions.map(
          a=>{
            const data= a.payload.doc.data();
            const id=a.payload.doc.id;
            return {id, ...(data as any)}
          }
        );
      }

      )

     
    );


    this.listaUsuarios=this.db.collection('usuarios').snapshotChanges().pipe(
      map(actions=>{
        return actions.map(
          a=>{
            const data= a.payload.doc.data();
            const id=a.payload.doc.id;
            return {id, ...(data as any)}
          }
        );
      }

      )

     
    );


    this.listaInscripciones=this.db.collection('inscripciones').snapshotChanges().pipe(
      map(actions=>{
        return actions.map(
          a=>{
            const data= a.payload.doc.data();
            const id=a.payload.doc.id;
            return {id, ...(data as any)}
          }
        );
      }

      )

     
    );

  
   
    
    
    this.listaAlumnos=this.db.collection('alumnos').snapshotChanges().pipe(
      map(actions=>{
        return actions.map(
          a=>{
            const data= a.payload.doc.data();
            const id=a.payload.doc.id;
            return {id, ...(data as any)}
          }
        );
      }

      )

     
    );


   }

  ;

  createInscripcion(pac:Inscripcion): Promise<DocumentReference> {
    return this.db.collection('inscripciones').add({...pac});
  }

  createUsuario(pac:persona): Promise<DocumentReference> {
    return this.db.collection('usuarios').add({...pac});
  }

  createAlumno(pac:Alumno): Promise<DocumentReference> {
    return this.db.collection('alumnos').add({...pac});
  }

  createMateria(pac:Materia): Promise<DocumentReference> {
    return this.db.collection('materias').add({...pac});
  }

  createEmpleado(emp:Profesor): Promise<DocumentReference> {
    return this.db.collection('profesores').add({...emp});
  }

  createAdministrador(emp:Administrador): Promise<DocumentReference> {
    return this.db.collection('administradores').add({...emp});
  }

  devolverListadoMaterias(){
    return this.listaMateria;
  }

  devolverListadoAlumnos(){
    return this.listaAlumnos;
  }

  devolverListadoProfesores(){
    return this.listaProfesores;
  }

  devolverListadoUsuarios(){
    return this.listaUsuarios;
  }

  devolverListadoInscripciones(){
    return this.listaInscripciones;
  }
}
