import { Component, OnInit, Input } from '@angular/core';
import { BdaService } from '../../servicio/bda.service';
import { persona } from '../../clases/persona';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

   @Input() listaUsuarios:persona[];
 
  constructor() { 
    
         
      
     

      
      
  }

  ngOnInit(): void {
    
    
  }

  
    
      

}

