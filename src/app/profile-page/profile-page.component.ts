import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {

  isProfile: boolean = true;
  isWallet: boolean = false;

  constructor(private router:Router,private dialog : MatDialog){}

  openOverlay(): void {
    this.dialog.open(LoginComponent, {
      width: '400px', // Set width as needed
    });
  }

  goToHomepage(){
    this.router.navigate(['/home']);
  }
  

  goToProfile(){
    this.router.navigate(['/username/profilePage']);

  }

  goToWallet(){
    this.router.navigate(['/username/wallet']);

  }

}
