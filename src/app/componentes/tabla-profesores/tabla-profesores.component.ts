import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BdaService } from '../../servicio/bda.service';
import { Profesor } from 'src/app/clases/Profesor';

@Component({
  selector: 'app-tabla-profesores',
  templateUrl: './tabla-profesores.component.html',
  styleUrls: ['./tabla-profesores.component.css']
})
export class TablaProfesoresComponent implements OnInit {

  @Output() mate:EventEmitter<any>=new EventEmitter<any>();
  listaProfesores;
  constructor(private bdaService:BdaService) { 
    
    this.bdaService.devolverListadoProfesores().subscribe(lista => {
      this.listaProfesores = lista;       
      
      });

      
    
  }

  ngOnInit(): void {
  }

  evento(doc:Profesor){
    this.mate.emit(doc);
    
  }
}
