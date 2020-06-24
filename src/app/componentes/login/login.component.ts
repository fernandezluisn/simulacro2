import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/servicio/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  pass:string;
  log:boolean;
  constructor(private router: Router, private servicio:ServiceService) {
    this.log=false;
    this.email="";
    this.pass="";
   }


  ngOnInit(): void {
    
  }

  onLogin(){
    console.log(this.email);
    
    this.servicio.loginUser(this.email, this.pass).then
    ((res)=>{
        
      
      this.router.navigate(['home']);
      
    }).catch(error=>{
      alert(error.message);      
    }
    );
    
  }

  onLogOut(){
    this.servicio.logOutUser();
     
  }

}
