import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {

  showTopicList = true;
  courseFilter: string = '';

  constructor(private router:Router) {}

  navigateToKourses(imageName: string){
    this.showTopicList = false;
    this.router.navigate(['/courses',imageName]);
    window.scrollTo({top:0,behavior:'smooth'});
  }

  topicList = [
    {
      topicName:'DSA',
      imagePath:'assets/images_courses/web-development.png'
    },
    {
      topicName:'MACHINE LEARNING',
      imagePath:'assets/images_courses/web-development.png'
    },
    {
      topicName:'WEB DEVELOPMENT',
      imagePath:'assets/images_courses/web-development.png'
    },
    {
      topicName:'SPRING BOOT',
      imagePath:'assets/images_courses/web-development.png'
    },
    {
      topicName:'DSA',
      imagePath:'assets/images_courses/web-development.png'
    },
    {
      topicName:'SPRING BOOT',
      imagePath:'assets/images_courses/web-development.png'
    },
    {
      topicName:'DSA',
      imagePath:'assets/images_courses/web-development.png'
    },
    {
      topicName:'SPRING BOOT',
      imagePath:'assets/images_courses/web-development.png'
    },
    {
      topicName:'DSA',
      imagePath:'assets/images_courses/web-development.png'
    },
    {
      topicName:'MACHINE LEARNING',
      imagePath:'assets/images_courses/web-development.png'
    },
    {
      topicName:'MACHINE LEARNING',
      imagePath:'assets/images_courses/web-development.png'
    },
    {
      topicName:'WEB DEVELOPMENT',
      imagePath:'assets/images_courses/web-development.png'
    }
  ];

}
