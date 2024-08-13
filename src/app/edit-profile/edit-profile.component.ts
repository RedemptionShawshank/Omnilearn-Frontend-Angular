import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {

  isLeftBarOpen: boolean = false;
  collegeName!:string;
  companyName!:string;

  constructor(private router :Router){}

  toggleLeftBar() {
    this.isLeftBarOpen = !this.isLeftBarOpen;
  }

  goToProfile(){
    this.router.navigate(['/username/profilePage']);

  }

  goToEdit(){
    this.router.navigate(['/username/edit']);
  }

  goToSavedCoures(){
    const username = localStorage.getItem('userName');
    this.router.navigate(['username/savedCourses']);
  }

}
