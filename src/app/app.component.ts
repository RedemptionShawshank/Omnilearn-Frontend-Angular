import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { LoginComponent } from './login/login.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'CourseBay_new';

  constructor(private router:Router,private location:Location, private dialog : MatDialog,
    private route:ActivatedRoute) {
    // router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     console.log('NavigationEnd event:', event);
    //   }
    // });



    // this.router.navigate(['/home']);
  }

  parameter: string | undefined;
  ngOnInit() {
    // Use ActivatedRoute to get the route parameters
    this.route.params.subscribe(params => {
      this.parameter = params['name'];
    });

    // console.log('parameter',this.parameter);
    // if(this.parameter === undefined){
    //   this.router.navigate(['/courses','DSA']);
    // }

    this.router.navigate(['/home']);
  }

}




