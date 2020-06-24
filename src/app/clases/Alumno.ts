
import { persona } from './persona';

export class  Alumno extends persona {
    
    id:string;
    constructor(email:string, tipo:string, nombre:string){
        super(email, tipo, nombre);
        
    }

    set ponerID(value: string) {
        this.id = value;
    }
}