import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { StateService } from '../state.service';
import { LoginInfo } from '../login-info';

interface userInfo {
  id: number;
  username: string;
  emailId: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  signUp:boolean = false;
  signIn:boolean = true;

  user: User = new User();
  loginInfo: LoginInfo = new LoginInfo();

  receivedInfo!: any;

  constructor (private service:StateService,private router:Router){}

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

  reloadPage() {
    window.location.reload();
  }

  loginCheck(){

    this.service.sendLoginInfo(this.loginInfo).subscribe((data)=>{
      console.log(data);
      if(data !=null){
        // console.log("returned data: ",data);
        this.service.loginStatus(true);
        // this.router.navigate(['/home']);
        // this.reloadPage();
        this.service.notifyComponentBRefresh();

        this.receivedInfo = data;
        // console.log("received: ",this.receivedInfo.id);
      }
      else{
        this.service.loginStatus(false);
      }
    },
    error=> console.log(error));
  }

  onSubmitLoginInfo(){
    // console.log("login information: ",this.loginInfo);
    this.loginCheck();

  }
}
