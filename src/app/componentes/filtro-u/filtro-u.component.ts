import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtro-u',
  templateUrl: './filtro-u.component.html',
  styleUrls: ['./filtro-u.component.css']
})
export class FiltroUComponent implements OnInit {

  @Output() filtro:EventEmitter<any>=new EventEmitter<any>();
  tipoU:string;
  constructor() {
    this.tipoU="Todos";
   }

  ngOnInit(): void {
  }

  filtrar(tipo){
    this.filtro.emit(tipo);
  }

}
