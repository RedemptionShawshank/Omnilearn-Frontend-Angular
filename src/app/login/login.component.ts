import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { StateService } from '../state.service';
import { LoginInfo } from '../login-info';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { RegisterDto } from '../register-dto';
import { OTPverificationComponent } from '../otpverification/otpverification.component';
import { AuthenticationCardComponent } from '../authentication-card/authentication-card.component';
import { timer } from 'rxjs/internal/observable/timer';
import { ForgetPasswordComponent } from '../forget-password/forget-password.component';

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

  constructor (private service:StateService,
    private router:Router,
    private dialogRef: MatDialogRef<LoginComponent>,
    private dialog : MatDialog,
    private dialogRefVerifyCard:MatDialogRef<AuthenticationCardComponent>){}

  @ViewChild('myFormSignUp') myFormSignUp!: NgForm;
  @ViewChild('myFormSignIn') myFormSignIn!: NgForm;
  invalid!:boolean;
  wrongPassword!: boolean;
  toggleSignUp(){
    this.signUp = !this.signUp;
    this.signIn = !this.signIn;
    this.invalid = false;
    this.wrongPassword = false;
  }
  
  toggleSignIn(){
    this.signIn = !this.signIn;
    this.signUp = !this.signUp;
    this.invalid = false;
    this.wrongPassword = false;
  }

  closeDialogSignUp():void{
    if(!this.myFormSignUp.valid){
      this.invalid=true;
    }
    console.log("invalid",this.invalid);

    if(!this.invalid){
      this.dialogRef.close();
    }
  }



  saveUserInfo(){
    
    this.service.addUserinfo(this.user);
    // .subscribe( response => {
    //   console.log("response",response);
    // },
    // error => console.log(error));
  }




  openOTP(){
    this.dialog.open(OTPverificationComponent, {
      width: '400px',
      height: '300px' // Set width as needed
    });
  }

  onSubmitSignUpInfo(){

    if(!this.myFormSignUp.valid){
      console.log("invalid form sign up");
      this.invalid = true;
      return;
    }

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
    localStorage.setItem('emailId',this.user.emailId)
    // console.log("user input",this.user);
    // console.log(this.user);
    this.saveUserInfo(); //sending the submited info to backend so that it can be saved into database

    this.openOTP();

  }

  reloadPage() {
    window.location.reload();
  }

  openVerifiedCard(){
    this.dialogRefVerifyCard = this.dialog.open(AuthenticationCardComponent, {
      width: '300px' // Set width as needed
    });

    setTimeout(()=>{
      console.log("inside timeout");
      this.dialogRefVerifyCard.close();
    },3000);

    // timer(3000).subscribe(() => {
    //   console.log("inside timer");
    //   this.dialogRefVerifyCard.close();
    // });
  }

  openForgetPassword():void{
    this.dialogRef.close();
    this.dialog.open(ForgetPasswordComponent, {
      width: 'auto',
      height: 'auto',
    });
  }


  onSubmitLoginInfo(){

    if(!this.myFormSignIn.valid){
      this.invalid = true;
      this.wrongPassword = false;
      // console.log("invalid form sign in");
      return;
    }


    this.service.sendLoginInfo(this.loginInfo).subscribe({
      next: (data)=>{
      // console.log("received data",data);
      if(data !=null){

        this.service.loginStatus(true); // this method in service updates the value of login flag and also stores it in local storage 

        this.service.notifyComponentBRefresh();

        this.receivedInfo = data;
        this.service.username = this.receivedInfo.username;
        console.log("username: ",this.receivedInfo.username);

        localStorage.setItem('userName',this.receivedInfo.username);

        this.wrongPassword = false;
        this.openVerifiedCard();
        this.closeDialogSignIn();

      }
      else{
        this.service.loginStatus(false);
        this.wrongPassword = true;
        this.invalid = false;
        console.log("wrong password",this.wrongPassword);
        this.closeDialogSignIn();
      }
    },
    error: (error)=> {
      console.log(error)
    }
    // complete: ()=>{

    // }
  });

  }

  closeDialogSignIn():void{
    // console.log("invalid",this.invalid);
    // console.log("wrong password",this.wrongPassword);
    if(!this.wrongPassword){
      this.dialogRef.close();
    }

  }
}
