import { Component } from '@angular/core';
import { timer } from 'rxjs/internal/observable/timer';

@Component({
  selector: 'app-authentication-card',
  templateUrl: './authentication-card.component.html',
  styleUrl: './authentication-card.component.css'
})
export class AuthenticationCardComponent {

  accountCreated:boolean = false;;
  loggedIn!:boolean;

  constructor(){

    const flag1 = localStorage.getItem('AccountCreated');
    if(flag1!==null && flag1 === 'true'){
      this.accountCreated = true;
      timer(4000).subscribe(() => {
      this.accountCreated = false;
      localStorage.setItem('AccountCreated','false');
    });
    }
    else{
      this.accountCreated = false;
    }

    const flag2 = localStorage.getItem('loginStatus');
    if(flag2!==null && flag2 === 'true'){
      this.loggedIn = true;
    }
    else{
      this.loggedIn = false;
    }
  }



}
