import { Component, OnInit, Input } from '@angular/core';
import { Profesor } from '../../clases/Profesor';
import { isNull } from 'util';
import { BdaService } from 'src/app/servicio/bda.service';
import { Materia } from 'src/app/clases/Materia';
import { Observable } from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-alta-materia',
  templateUrl: './alta-materia.component.html',
  styleUrls: ['./alta-materia.component.css']
})
export class AltaMateriaComponent implements OnInit {
  @Input()docente:Profesor;
  @Input()haydoc:Profesor;
  nombreM:string;
  cuatrimestre;
  cupos:number;
  uploadPercent1: Observable<number>;
  url1: string;
 


  constructor(private bda:BdaService, private storage:AngularFireStorage) { 
    this.url1=null;
  }

  ngOnInit(): void {
   

    
  }

  imagen1(img){
    
    const com=Math.random().toString(36).substring(2);
    const file= img.target.files[0];
    const path= 'imagenes/'+ com;
    const ref=this.storage.ref(path);    
    const task=this.storage.upload(path, file);
    this.uploadPercent1=task.percentageChanges();
    
    task.snapshotChanges().pipe(finalize(()=>ref.getDownloadURL().subscribe(url=> this.url1=url))).subscribe();  
    
  }
  
  registrarMateria(){
    if(this.haydoc && this.nombreM.length>3 && this.cupos>10 && this.cupos<61){
      let m=new Materia(this.nombreM, this.cupos, this.cuatrimestre, this.docente.email);
      
      try{
        if(!(isNull(this.url1)))
        m.url=this.url1;

        this.bda.createMateria(m); 
        alert("Materia creada");
      }catch(err){
        alert(err);
      }
    }else{
      alert("Datos mal ingresados");
    }
    
    
  }
}
