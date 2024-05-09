import { Component,HostListener,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { StateService } from '../state.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent implements OnInit {

  login:boolean = false;
  showTopicList!:boolean;

  constructor(private dialog : MatDialog,private router:Router,private service:StateService) {

        // here we add things we want at the time of reload, as after reload constructor in intantiated first

        const storedValue: string | null = localStorage.getItem('loginStatus');
    

        if(storedValue === 'true'){
          this.login = true;
        }
        else{
          this.login = false;
        }

        this.showTopicList = service.getTopicListFlag();
  }

  ngOnInit(): void {

    this.service.courselistRefresh.subscribe(() => {
      this.refreshComponent();
    });
  }

  refreshComponent(){

    // console.log("login before in refresh: ",this.login);
    const storedValue1: string | null = localStorage.getItem('loginStatus');

    if(storedValue1 === 'true'){
      this.login = true;
    }
    else{
      this.login = false;
    }

    // console.log("login after in refresh: ",this.login);

    

  }

  openOverlay(): void {
    this.dialog.open(LoginComponent, {
      width: '400px', // Set width as needed
    });
  }

  goToHomepage(){
    this.router.navigate(['/home']);
    this.service.setTopicListFlag(true);
  }

  isHovered: boolean = false;

  showDropDown(){
    this.isHovered = !this.isHovered;

  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!((event.target as HTMLElement).closest('.btn') || (event.target as HTMLElement).closest('.options'))) {
      this.isHovered = false;
    }
  }

  navigateToProfile() {
    // Implement navigation to profile 
    this.isHovered = !this.isHovered;
    this.service.setTopicListFlag(false);
    this.router.navigate(['/username/profilePage']);
    window.scrollTo({top:0,behavior:'smooth'});
  }

  logOut() {

    this.login = false;
    this.isHovered = false;
    localStorage.setItem('loginStatus', String(this.login));
    this.router.navigate(['/home']);
    window.scrollTo({top:0,behavior:'smooth'});
  }



}
