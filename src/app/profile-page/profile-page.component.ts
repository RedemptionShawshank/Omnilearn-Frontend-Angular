import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { StateService } from '../state.service';

interface userInfo {
  id: number;
  username: string;
  emailId: string;
  password: string;
}

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {

  isProfile: boolean = true;
  isWallet: boolean = false;
  userdata!: userInfo;


  constructor(private router:Router,private dialog : MatDialog,private service:StateService){

    this.userdata = service.receivedInfo;
    if(localStorage.getItem('recievedData') != null){
      const info = localStorage.getItem('recievedData');
      const parsedUser = info ? JSON.parse(info) : null;
      this.userdata = parsedUser;
    }


  }

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

  goToSavedCoures(){
    const username = localStorage.getItem('userName');
    this.router.navigate(['username/savedCourses']);
  }

  isLeftBarOpen: boolean = false;

  toggleLeftBar() {
    this.isLeftBarOpen = !this.isLeftBarOpen;
  }

  // showButton: boolean = false;

  //   @HostListener('window:resize', ['$event'])
  //   onResize(event:any) {
  //       // Update showButton based on window width

  //       if(window.outerWidth < 901){
  //         this.showButton = true;
  //       }

  //   }

}
