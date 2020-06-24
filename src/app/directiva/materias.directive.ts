import { Directive, ElementRef, Input } from '@angular/core';
import { Materia } from '../clases/Materia';

@Directive({
  selector: '[appMaterias]'
})
export class MateriasDirective {
@Input() materia:Materia;
  constructor(el:ElementRef) { 
    if(this.materia.cupo>20)
    el.nativeElement.style.color="green";
    else if(this.materia.cupo>10)
    el.nativeElement.style.color="orange";
    else
    el.nativeElement.style.color="red";
  }
}
