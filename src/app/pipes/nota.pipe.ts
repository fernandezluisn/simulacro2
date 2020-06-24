import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nota'
})
export class NotaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    
    if (value<=10 && value>=6)
    return "promocionado";
    else if(value<6 && value>=4)
    return "aprobado";
    else if(value<4 && value>=1)
    return "desaprobado";
    else
    return "aún no ha sido calificado";
  }

}
