import { Profesor } from './Profesor';
import { Alumno } from './Alumno';

export class Materia{
nombre:string;
cupo:number;
cuatri:string;
profesorEmail:string;
url:string;


constructor(nombre:string, cupo:number, cuatri:string, profesorEmail:string){
    this.cuatri=cuatri;
    this.nombre=nombre;
    this.profesorEmail=profesorEmail;
    this.cupo=cupo;

}

set ponerURL(value: string) {
    this.url = value;
}

}