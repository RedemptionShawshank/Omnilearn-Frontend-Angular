import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Options,LabelType } from '@angular-slider/ngx-slider';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { StateService } from '../state.service';

interface CourseDetail {
  topicName: string;
  courses: Course[];
}

interface Course {
  price: number;
  CourseName: string;
  link: string;
  description: string;
  imagePath: string;
}

@Component({
  selector: 'app-kourses',
  templateUrl: './kourses.component.html',
  styleUrl: './kourses.component.css'
})
export class KoursesComponent implements OnInit {


  loading: boolean = false;
  isLoading: boolean = false;
  imageName: string | undefined;
  platformName: string= '';
  


  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private dialog : MatDialog,
    private service:StateService
  ) {
      const paramValue = this.route.snapshot.params;
      console.log('Route parameter value:', paramValue);
    }

  ngOnInit() {
    // Use ActivatedRoute to get the route parameters
    this.route.params.subscribe(params => {
      this.imageName = params['name'];
      this.service.sendPathVariable(params['name']);
    });
  }



  openOverlay(): void {
    this.dialog.open(LoginComponent, {
      width: '400px', // Set width as needed
    });
  }

  goToHomepage(){
    this.router.navigate(['/home']);
  }

  //loader
  loaderOnInput(event: any){
    // Show loader when input changes
    this.loading = true;

    // Simulate API call or search operation delay
    setTimeout(() => {
      // Hide loader after a delay (e.g., after API call completes)
      this.loading = false;
    }, 2000); // Adjust the delay as needed
  }

  onSliderChange(event: any) {
    // Show loader
    this.isLoading = true;

    // Perform filtering logic
    // Simulate async operation
    setTimeout(() => {
      // Hide loader
      this.isLoading = false;

      // Apply filter logic here
    }, 2000); // Simulated delay of 1 second
  } 



  

  courseDetails: CourseDetail[] = [
    {
      topicName:'MACHINE LEARNING',courses:[
        {price: 1000, CourseName:'cousera', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {price: 5000, CourseName:'cousera', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {price: 19000, CourseName:'cousera', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {price: 10000, CourseName:'udemy', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {price: 5000, CourseName:'udemy', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {price: 34000, CourseName:'udemy', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {price: 29000, CourseName:'udemy', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {price: 15000, CourseName:'codingninja', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {price: 5000, CourseName:'codingninja', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {price: 23000, CourseName:'codingninja', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'}
      ]
    },
    {
      topicName:'WEB DEVELOPMENT',courses:[
        {price: 1000, CourseName:'WEB DEVELOPMENT Link for course at platform A', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {price: 2000, CourseName:'WEB DEVELOPMENTLink for course at platform B', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {price: 5000, CourseName:'WEB DEVELOPMENTLink for course at platform C', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {price: 45000, CourseName:'WEB DEVELOPMENTLink for course at platform D', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {price: 21000, CourseName:'WEB DEVELOPMENTLink for course at platform E', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {price: 5000, CourseName:'WEB DEVELOPMENTLink for course at platform F', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {price: 15000, CourseName:'WEB DEVELOPMENTLink for course at platform G', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {price: 20000, CourseName:'WEB DEVELOPMENTLink for course at platform H', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {price: 38000, CourseName:'WEB DEVELOPMENTLink for course at platform I', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {price: 5000, CourseName:'WEB DEVELOPMENTLink for course at platform J', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'}
      ]
    },
    {
      topicName:'DSA',courses:[
        {price: 54000, CourseName:'DSALink for course at platform A', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {price: 5000, CourseName:'DSALink for course at platform B', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {price: 5000, CourseName:'DSALink for course at platform C', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {price: 5000, CourseName:'DSALink for course at platform D', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {price: 10000, CourseName:'DSALink for course at platform E', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {price: 5000, CourseName:'DSALink for course at platform F', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {price: 17000, CourseName:'DSALink for course at platform G', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {price: 5000, CourseName:'DSALink for course at platform H', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {price: 5000, CourseName:'DSALink for course at platform I', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {price: 8000, CourseName:'DSALink for course at platform J', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'}
      ]
    }
  ];

  // price slider

  showFullListOfCourses = true;
  showNoResult = false;

  
  maxValue: number = 50000;
  minValue: number = 0 ;



  options: Options = {
    floor: 0,
    ceil: 50000,
    step:500,
    // showTicks:true,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>Min:</b> ₹" + value;
        case LabelType.High:
          return "<b>Max:</b> ₹" + value;
        default:
          return "₹" + value;
      }
    }
  };


  filteredCourses: Course[] = [];


  filterCoursesByPrice(minPrice: number, maxPrice: number,topicName: any): void {
    this.filteredCourses = [];
    for (const topic of this.courseDetails) {
      if(topic.topicName === topicName){

        for (const course of topic.courses) {
          if (course.price >= minPrice && course.price <= maxPrice) {
            this.filteredCourses.push(course);
          }

          if(minPrice == maxPrice && course.price == minPrice){
            this.filteredCourses.push(course);
          }
          else if(maxPrice == minPrice && course.price != minPrice){
            this.showFullListOfCourses = false;
            this.showNoResult = true;
          }

        }

        console.log("filtered length: ",this.filteredCourses.length);
        console.log("not reset full list: ",this.showFullListOfCourses);
        console.log("not reset no result: ",this.showNoResult);

        if(this.filteredCourses.length === 0){
          console.log("filtered length: ",this.filteredCourses.length);
          console.log("if condition not reset full list: ",this.showFullListOfCourses);
          console.log("if condition not reset no result: ",this.showNoResult);
          this.showNoResult = true;
          this.showFullListOfCourses = false;
        }
        else{
          console.log("else condition not reset full list: ",this.showFullListOfCourses);
          console.log("else condition not reset no result: ",this.showNoResult);
          this.showFullListOfCourses = false;
          this.showNoResult = false;
        }

      }

    }

    console.log("filtered courses: ",this.filteredCourses);



  }


  resetFilter(): void {

    console.log("full list: ",this.showFullListOfCourses);
    console.log("no result: ",this.showNoResult);

    this.minValue = 0;
    this.maxValue = 50000;
    this.filteredCourses = [];
    this.showFullListOfCourses = true;
    this.showNoResult = false;
  }



  
}
