import { persona } from './persona';

export class  Profesor extends persona {
    
    id:string;
    materias:string[];
    constructor(  email:string, tipo:string, nombre:string){
        super(email, tipo, nombre);
        
    }

    set ponerID(value: string) {
        this.id = value;
    }
}