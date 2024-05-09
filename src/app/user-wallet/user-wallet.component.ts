import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../user';
import {StateService} from '../state.service'

@Component({
  selector: 'app-user-wallet',
  templateUrl: './user-wallet.component.html',
  styleUrl: './user-wallet.component.css'
})
export class UserWalletComponent implements OnInit {

  constructor(private router:Router,
    private dialog : MatDialog,
    private userService: StateService){}

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

  users!: User[];

  ngOnInit(): void {

    this.getUsers();
    
  }

  private getUsers(){
    this.userService.getUserList().subscribe(data =>{
      this.users = data;
      console.log("data: ",this.users);
    });

  }


}
