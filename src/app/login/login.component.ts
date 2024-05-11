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
    // console.log("signed up user details: ",this.user);
    const email = this.user.emailId;
    var username:any = '';
    for(var i=0;i<email.length;i++){
      if(email.charAt(i)!='@'){
        username += email.charAt(i);
      }
      else{
        break;
      }
    }
    this.user.username = username;
    localStorage.setItem('userName',username);
    // console.log("user input",this.user);
    this.saveUserInfo(); //sending the submited info to backend so that it can be saved into database

  }

  reloadPage() {
    window.location.reload();
  }

  loginCheck(){

    this.service.sendLoginInfo(this.loginInfo).subscribe((data)=>{
      console.log("received data",data);
      if(data !=null){

        this.service.loginStatus(true); // this method in service updates the value of login flag and also stores it in local storage 

        this.service.notifyComponentBRefresh();

        this.receivedInfo = data;
        this.service.username = this.receivedInfo.username;
        console.log("username: ",this.receivedInfo.username);

        localStorage.setItem('userName',this.receivedInfo.username);

      }
      else{
        this.service.loginStatus(false);
      }
    },
    error=> console.log(error));
  }

  onSubmitLoginInfo(){
    this.loginCheck();
  }
}
