import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {

  showTopicList = true;

  constructor(private router:Router) {}

  navigateToKourses(imageName: string){
    this.showTopicList = false;
    this.router.navigate(['/courses',imageName]);
    window.scrollTo({top:0,behavior:'smooth'});
  }

}
