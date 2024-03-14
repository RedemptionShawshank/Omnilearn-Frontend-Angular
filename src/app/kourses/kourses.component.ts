import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-kourses',
  templateUrl: './kourses.component.html',
  styleUrl: './kourses.component.css'
})
export class KoursesComponent implements OnInit {



  imageName: string | undefined;
  platformName: string= '';

  constructor(
    private route: ActivatedRoute,
    private location: Location) {
      const paramValue = this.route.snapshot.params;
      console.log('Route parameter value:', paramValue);
    }

  ngOnInit() {
    // Use ActivatedRoute to get the route parameters
    this.route.params.subscribe(params => {
      this.imageName = params['name'];
    });


  }

  users = [{
    name: 'Leela',
    joinedDate: new Date(15, 2, 2016)
  },
  {
    name: 'Rama',
    joinedDate: new Date(17, 3, 2019)
  },
  {
    name: 'Krishna',
    joinedDate: new Date(20, 4, 2019)
  },
  ];


  courseDetails = [
    {
      topicName:'MACHINE LEARNING',courses:[
        {CourseName:'cousera', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:'cousera', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:'cousera', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:'udemy', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:'udemy', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:'udemy', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:'udemy', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:'codingninja', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:'codingninja', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:'codingninja', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'}
      ]
    },
    {
      topicName:'WEB DEVELOPMENT',courses:[
        {CourseName:'WEB DEVELOPMENT Link for course at platform A', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:'WEB DEVELOPMENTLink for course at platform B', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:'WEB DEVELOPMENTLink for course at platform C', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:'WEB DEVELOPMENTLink for course at platform D', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:'WEB DEVELOPMENTLink for course at platform E', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:'WEB DEVELOPMENTLink for course at platform F', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:'WEB DEVELOPMENTLink for course at platform G', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:'WEB DEVELOPMENTLink for course at platform H', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:'WEB DEVELOPMENTLink for course at platform I', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:'WEB DEVELOPMENTLink for course at platform J', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'}
      ]
    },
    {
      topicName:'DSA',courses:[
        {CourseName:'DSALink for course at platform A', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:'DSALink for course at platform B', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:'DSALink for course at platform C', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:'DSALink for course at platform D', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:'DSALink for course at platform E', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:'DSALink for course at platform F', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:'DSALink for course at platform G', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:'DSALink for course at platform H', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:'DSALink for course at platform I', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:'DSALink for course at platform J', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'}
      ]
    }
  ];
}
