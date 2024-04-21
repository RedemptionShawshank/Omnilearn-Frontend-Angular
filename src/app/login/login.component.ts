import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { StateService } from '../state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  signUp:boolean = false;
  signIn:boolean = true;
  user: User = new User();

  constructor (private service:StateService){}

  toggleSignUp(){
    this.signUp = !this.signUp;
    this.signIn = !this.signIn;
  }
  
  toggleSignIn(){
    this.signIn = !this.signIn;
    this.signUp = !this.signUp;
  }

  saveUserInfo(){
    this.service.addUserinfo(this.user).subscribe( data => {
      console.log(data);
    },
    error => console.log(error));
  }

  onSubmit(){
    console.log(this.user);
    this.saveUserInfo(); //sending the submited info to backend so that it can be saved into database

  }
}
