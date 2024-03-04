import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

interface ImageDetail {
  topicName: string;
  imageLoc: string;
}


@Component({
  selector: 'app-kourses',
  templateUrl: './kourses.component.html',
  styleUrl: './kourses.component.css'
})
export class KoursesComponent implements OnInit {

  imageName: string | undefined;
  coursesForTopics: ImageDetail[] = [];

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

  courseDetails=[
    {
      topicName:'MACHINE LEARNING',courses:[
        {CourseName:'MACHINE LEARNING Link for course at platform A', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:'MACHINE LEARNINGLink for course at platform B', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:'MACHINE LEARNING Link for course at platform C', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:'MACHINE LEARNING Link for course at platform D', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:'MACHINE LEARNING Link for course at platform E', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:'MACHINE LEARNING Link for course at platform F', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:'MACHINE LEARNING Link for course at platform G', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:'MACHINE LEARNING Link for course at platform H', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:'MACHINE LEARNING Link for course at platform I', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'},
        {CourseName:' MACHINE LEARNINGLink for course at platform J', link:'https://www.coursera.org/', description:'this is the description for the course which is given by platform B this is the description for the course which is given by platform B this is the description for the course which is given by platform B', imagePath:'assets/images_courses/web-development.png'}
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
