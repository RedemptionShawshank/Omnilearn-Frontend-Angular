import { Component,HostListener,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { StateService } from './state.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CourseBay_new';

  constructor(private router:Router,private location:Location, private dialog : MatDialog,
    private route:ActivatedRoute,private service:StateService) {

      console.log("page reload came to app.component");

      const storedRoute = localStorage.getItem('lastRoute');
      if (storedRoute) {
        router.navigateByUrl(storedRoute);
        if(storedRoute=='/home'){
          service.setTopicListFlag(true);
        }
        else{
          service.setTopicListFlag(false);
        }
      }

  }


}




