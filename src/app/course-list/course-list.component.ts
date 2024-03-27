import { Component,ViewChild, ElementRef  } from '@angular/core';
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
  loading: boolean = false;

  @ViewChild('searchResults') searchResultsRef!: ElementRef;
  @ViewChild('scrollTarget') scrollTargetRef!: ElementRef;

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

  // scrollToSearchResults() {
  //   console.log("scrollTargetRef",this.scrollTargetRef);
  //   if (this.searchResultsRef && this.searchResultsRef.nativeElement) {
  //     this.scrollTargetRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // }

  scrollToSearchResults() {
    console.log("searchResultsRef",this.searchResultsRef);
    window.scrollTo({top:400,behavior:'smooth'});
    // if (this.searchResultsRef && this.searchResultsRef.nativeElement) {
    //   this.searchResultsRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    // }
  }
  

}
