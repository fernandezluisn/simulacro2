import { Component, OnInit, Input } from '@angular/core';
import {NotaPipe} from '../../pipes/nota.pipe';

@Component({
  selector: 'app-tabla-inscripciones',
  templateUrl: './tabla-inscripciones.component.html',
  styleUrls: ['./tabla-inscripciones.component.css']
})
export class TablaInscripcionesComponent implements OnInit {
  @Input() listaInscripciones;
  userL;
  constructor( ) { 

  
    
  }

  ngOnInit(): void {
  
  }

}
