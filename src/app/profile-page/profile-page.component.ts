import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { StateService } from '../state.service';
import { User } from '../user';

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
export class ProfilePageComponent implements OnInit {

  isProfile: boolean = true;
  isWallet: boolean = false;
  userdata!: User;
  initials!:string;


  constructor(private router:Router,private dialog : MatDialog,private service:StateService){

    this.userdata = service.receivedInfo;
    if(localStorage.getItem('recievedData') != null){
      const info = localStorage.getItem('recievedData');
      const parsedUser = info ? JSON.parse(info) : null;
      this.userdata = parsedUser;
    }
    this.initials = this.userdata.name.charAt(0);

  }
  ngOnInit(): void {

    // window.addEventListener('popstate', (event) => {
    //   console.log("popstate:",event);
    //   if (event.state !== 'null') {
    //     this.onPopState();
    //   }
    // });
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

  // onPopState() {
  //   this.service.setTopicListFlag(true);
  //   this.service.setReloadFlag(false);
  // }

  // @HostListener('window:popstate', ['$event'])
  // onPopState(event:Event) {
  //   if(event !==null){
  //     console.log("back pressed",event);
  //     this.service.setTopicListFlag(true);
  //     localStorage.setItem('lastRoute', this.router.url);
  //   }
  //   else{
  //     console.log("back pressed",event);
  //   }


  // }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler(event: Event) {
    localStorage.setItem('lastRoute', this.router.url);
  }



}
