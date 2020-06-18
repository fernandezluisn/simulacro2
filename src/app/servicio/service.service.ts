import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public afAuth:AngularFireAuth) { }

  tomarUsuario(){  
    return this.afAuth.currentUser;
  }

  loginUser(email:string, password:string){
    return new Promise((resolve, reject)=>{
      this.afAuth.signInWithEmailAndPassword(email, password)
      .then( userData=>
        resolve(userData),
      
      err=>reject(err));
    });
    
    
  }
  
  
  logOutUser(){
    return this.afAuth.signOut();
  }
}
