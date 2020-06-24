export class persona {

    email:string;
    nombre:string;
    id:string;
    tipo:string;
   

    constructor(email:string, tipo:string, nombre:string) {
        
        this.tipo=tipo;
        this.email=email;
        this.nombre=nombre;
        
        
    }

    set ponerID(value: string) {
        this.id = value;
    }
}