import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import {MateriasDirective} from '../../directiva/materias.directive';
import { Materia } from '../../clases/Materia';

@Component({
  selector: 'app-tabla-materias',
  templateUrl: './tabla-materias.component.html',
  styleUrls: ['./tabla-materias.component.css']
})
export class TablaMateriasComponent implements OnInit {
  @Output() mateElegida:EventEmitter<any>=new EventEmitter<any>();
  @Input() listaMaterias;
  constructor() { 
    
    

      
    
  }

  ngOnInit(): void {
  }

  evento(materia:Materia){
    this.mateElegida.emit(materia);
  }
}
