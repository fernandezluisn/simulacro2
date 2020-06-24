
export class Inscripcion{
    alumno:string;
    materia:string;
    nota:number;

    constructor(alumnoID:string, materiaID:string){
        this.alumno=alumnoID;
        this.materia=materiaID;

    }

    

    set ponerNota(value: number) {
        this.nota = value;
    }
}