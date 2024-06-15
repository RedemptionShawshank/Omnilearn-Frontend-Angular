import { Component, ViewChild } from '@angular/core';
import { ForgetPassword } from '../forget-password';
import { StateService } from '../state.service';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

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
  @ViewChild('myFormForgetPassword') myFormForgetPassword!: NgForm;

  constructor(
    private service:StateService,
    private dialogRef: MatDialogRef<ForgetPasswordComponent>,
    private dialog : MatDialog
  ){}

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
        }
      },
      error:(error)=>{
        console.log(error);
      }
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

}
