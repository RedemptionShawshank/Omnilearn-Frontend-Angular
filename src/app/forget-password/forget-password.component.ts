import { Component, ViewChild } from '@angular/core';
import { ForgetPassword } from '../forget-password';
import { StateService } from '../state.service';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { OTPverificationComponent } from '../otpverification/otpverification.component';
import { AuthenticationCardComponent } from '../authentication-card/authentication-card.component';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {

  forgetPassword: ForgetPassword = new ForgetPassword();
  newPassword!:string;
  passwordMatch:boolean = true;
  invalid:boolean=false;
  emailCheck:boolean = true;
  passwordSmall:boolean = false;
  accountVerified:boolean=false;
  @ViewChild('myFormForgetPassword') myFormForgetPassword!: NgForm;
  @ViewChild('accountCheck') accountCheck!: NgForm;

  constructor(
    private service:StateService,
    private dialogRef: MatDialogRef<ForgetPasswordComponent>,
    private dialogRefVerifyCard:MatDialogRef<AuthenticationCardComponent>,
    private dialog : MatDialog
  ){
    this.accountVerified = service.getAccountCheck();
  }

  onSubmitForgetPassword():void{

    if(!this.myFormForgetPassword.valid){
      this.invalid = true;
      this.passwordMatch = true;
      this.emailCheck = true;
      this.passwordSmall = false;
      return;
    }

    if(this.forgetPassword.password.length<=7){
      this.passwordSmall = true;
      this.passwordMatch = true;
      this.emailCheck = true;
      this.invalid = false;
      return;

    }

    if(!(this.newPassword === this.forgetPassword.password)){
      this.passwordMatch = false;
      this.invalid = false;
      this.emailCheck = true;
      this.passwordSmall = false;
      return;
    }

    const val = localStorage.getItem('emailId');

    if(val!==null){
      this.forgetPassword.emailId = val;
    }


    this.service.sendForgetPasswordInfo(this.forgetPassword).subscribe({
      next:(data)=>{
        console.log("response: ",data);
        if(data === "Email id not present"){
          this.emailCheck = false;
          this.invalid = false;
          this.passwordSmall = false;
          this.passwordMatch = true;
        }
        else{
          this.closeBox();
          this.openVerifiedCard();
          // this.dialogRefVerifyCard.close();
        }
      },
      error:(error)=>{
        console.log(error);
      }
    });


  }

  openVerifiedCard(){
    this.dialogRefVerifyCard = this.dialog.open(AuthenticationCardComponent, {
      width: '300px' // Set width as needed
    });
  }

  closeBox(){
    this.dialogRef.close();
  }

  openSignUp(){
    this.dialogRef.close();
    this.dialog.open(LoginComponent, {
      width: 'auto',
      height: 'auto',
    });
  }

  emailVerification(){

    if(!this.accountCheck.valid){
      this.invalid = true;
      this.emailCheck = true;
      return;
    }

    localStorage.setItem('emailId',this.forgetPassword.emailId);

    this.service.checkEmail(this.forgetPassword.emailId).subscribe({
      next: (data:boolean)=>{
        if(data){
          this.emailCheck = true;
          this.openOTP();
          this.resendOTP();
          // this.dialogRef.close();
        }
        else{
          this.emailCheck = false;
        }
      },
      error: (error)=>{
        console.log(error);
      },
      complete: ()=>{
        console.log("emailCheck ",this.emailCheck);
        if(this.emailCheck){
          this.accountVerified = this.service.getAccountCheck();
          console.log("account check: ",this.accountVerified);
        }
      }
    });
  }

  resendOTP(){
    const emailId = localStorage.getItem('emailId');

    if(emailId !== null){
      this.service.resendOTP(emailId).subscribe( data=>{

        // console.log(data);
        if(data==="Sent"){
          this.invalid = false;
        }

      },
    error => console.log(error));
    }

    return;

  }

  openOTP(){
    this.dialog.open(OTPverificationComponent, {
      width: 'auto',
      height: 'auto' // Set width as needed
    });
  }

}
