import { Component, HostListener, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { StateService } from '../state.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saved-courses',
  templateUrl: './saved-courses.component.html',
  styleUrl: './saved-courses.component.css'
})
export class SavedCoursesComponent implements OnInit {

  platformLists:any;

  constructor(private router:Router,
    private dialog : MatDialog,
    private service: StateService){}
  ngOnInit() {

    this.loadFavouriteList();
  }


  
    loadFavouriteList(){

      const username = localStorage.getItem('userName');
      if(username !== null){
        this.service.getFavouriteListByUsername(username).subscribe((data) => {
          console.log("received favorite list: ", data);
          this.platformLists = data;
        },
        error=>console.log(error));
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

  goToEdit(){
    this.router.navigate(['/username/edit']);
  }

  goToSavedCoures(){
    const username = localStorage.getItem('userName');
    this.router.navigate(['username/savedCourses']);
  }

  isLeftBarOpen: boolean = false;

  toggleLeftBar() {
    this.isLeftBarOpen = !this.isLeftBarOpen;
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler(event: Event) {
    localStorage.setItem('lastRoute', this.router.url);
  }

  openInNewTab(affiliateLink:string){
    window.open(affiliateLink, '_blank')
  }


}
