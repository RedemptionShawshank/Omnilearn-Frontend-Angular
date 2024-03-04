import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  signUp:boolean = false;
  signIn:boolean = true;


  toggleSignUp(){
    this.signUp = !this.signUp;
    this.signIn = !this.signIn;
  }
  
  toggleSignIn(){
    this.signIn = !this.signIn;
    this.signUp = !this.signUp;
  }


}
