import { Component } from '@angular/core';
import { StateService } from '../state.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-otpverification',
  templateUrl: './otpverification.component.html',
  styleUrl: './otpverification.component.css'
})
export class OTPverificationComponent {

  constructor(private service:StateService,private dialogRef: MatDialogRef<OTPverificationComponent>){}

  invalid:boolean = false;

  verifyAccount(){

    const otp1 = (document.getElementById('otp-input1') as HTMLInputElement).value;
    const otp2 = (document.getElementById('otp-input2') as HTMLInputElement).value;
    const otp3 = (document.getElementById('otp-input3') as HTMLInputElement).value;
    const otp4 = (document.getElementById('otp-input4') as HTMLInputElement).value;
    const otp5 = (document.getElementById('otp-input5') as HTMLInputElement).value;
    const otp6 = (document.getElementById('otp-input6') as HTMLInputElement).value;
  
    // Concatenate the values to form the full OTP string
    const otp = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;
    console.log("otp entered: ",otp);

    const emailId = localStorage.getItem('emailId');

    if(emailId!==null){
      this.service.verifyAccount(emailId,otp).subscribe(data =>{
        console.log("returned response: ",data);
        if(data === "Verified"){
          this.invalid = false;
          this.dialogRef.close();
        }
        else{
          this.invalid = true;
        }
      },
      error => console.log(error));
    }


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

  }

  onInput(currentInput: HTMLInputElement, nextInput: HTMLInputElement | null): void {
    if (currentInput.value.length === 1 && nextInput) {
      nextInput.focus();
    }
  }

  onKeydown(event: KeyboardEvent, currentInput: HTMLInputElement, previousInput: HTMLInputElement | null): void {
    if (event.key === 'Backspace' && currentInput.value.length === 0 && previousInput) {
      previousInput.focus();
    }
  }

}
