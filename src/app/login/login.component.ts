import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { StateService } from '../state.service';
import { LoginInfo } from '../login-info';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { RegisterDto } from '../register-dto';
import { OTPverificationComponent } from '../otpverification/otpverification.component';

// interface userInfo {
//   id: number;
//   username: string;
//   emailId: string;
//   password: string;
// }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  signUp:boolean = false;
  signIn:boolean = true;

  user: RegisterDto = new RegisterDto();
  loginInfo: LoginInfo = new LoginInfo();

  receivedInfo!: any;

  constructor (private service:StateService,private router:Router,private dialogRef: MatDialogRef<LoginComponent>,private dialog : MatDialog){}

  toggleSignUp(){
    this.signUp = !this.signUp;
    this.signIn = !this.signIn;
    this.invalid = false;
  }
  
  toggleSignIn(){
    this.signIn = !this.signIn;
    this.signUp = !this.signUp;
    this.invalid = false;
  }

  closeDialog():void{
    if(!this.myForm.valid){
      console.log("invalid input");
      this.invalid=true;
    }
    else{
      this.invalid=false;
    }
    if(!this.invalid ){
      this.dialogRef.close();
    }

    this.dialog.open(OTPverificationComponent, {
      width: '400px', // Set width as needed
    });
  }

  saveUserInfo(){
    this.service.addUserinfo(this.user).subscribe( data => {
      console.log(data);
    },
    error => console.log(error));
  }

  @ViewChild('myForm') myForm!: NgForm;
  invalid!:boolean;

  onSubmit(){
    console.log("user entered: ",this.user);
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
    // console.log(this.user);
    this.saveUserInfo(); //sending the submited info to backend so that it can be saved into database

  }

  reloadPage() {
    window.location.reload();
  }

  loginCheck(){

    this.service.sendLoginInfo(this.loginInfo).subscribe((data)=>{
      // console.log("received data",data);
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
