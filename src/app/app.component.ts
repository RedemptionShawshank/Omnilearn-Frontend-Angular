import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CourseBay_new';

  constructor(private router:Router,private location:Location, private dialog : MatDialog) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('NavigationEnd event:', event);
      }
    });
  }

  // openOverlay(): void {
  //   this.dialog.open(LoginComponent, {
  //     width: '400px',
  //   });
  // }



  

}


