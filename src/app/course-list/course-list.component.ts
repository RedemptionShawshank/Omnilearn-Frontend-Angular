import { Component,ViewChild, ElementRef, HostListener, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { StateService } from '../state.service';
import { TopicList } from '../topic-list';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {

  showTopicList:boolean = true;
  courseFilter: string = '';
  loading: boolean = false;

  @ViewChild('searchResults') searchResultsRef!: ElementRef;
  @ViewChild('scrollTarget') scrollTargetRef!: ElementRef;

  constructor(private router:Router,private dialog : MatDialog,private userService: StateService) {}

  navigateToKourses(imageName: string){
    this.showTopicList = false;
    this.router.navigate(['/courses',imageName]);
    window.scrollTo({top:0,behavior:'smooth'});
  }

  topicList!: TopicList[];

  ngOnInit(): void {

    this.getTopicList();
    
  }

  private getTopicList(){
    this.userService.getTopicList().subscribe(data =>{
      this.topicList = data;
      console.log("topic list: ",this.topicList);
    });

  }


  // topicList = [
  //   {
  //     topicName:'DSA',
  //     imagePath:'assets/images_courses/web-development.png'
  //   },
  //   {
  //     topicName:'MACHINE LEARNING',
  //     imagePath:'assets/images_courses/web-development.png'
  //   },
  //   {
  //     topicName:'WEB DEVELOPMENT',
  //     imagePath:'assets/images_courses/web-development.png'
  //   },
  //   {
  //     topicName:'SPRING BOOT',
  //     imagePath:'assets/images_courses/web-development.png'
  //   },
  //   {
  //     topicName:'DSA',
  //     imagePath:'assets/images_courses/web-development.png'
  //   },
  //   {
  //     topicName:'SPRING BOOT',
  //     imagePath:'assets/images_courses/web-development.png'
  //   },
  //   {
  //     topicName:'DSA',
  //     imagePath:'assets/images_courses/web-development.png'
  //   },
  //   {
  //     topicName:'SPRING BOOT',
  //     imagePath:'assets/images_courses/web-development.png'
  //   },
  //   {
  //     topicName:'DSA',
  //     imagePath:'assets/images_courses/web-development.png'
  //   },
  //   {
  //     topicName:'MACHINE LEARNING',
  //     imagePath:'assets/images_courses/web-development.png'
  //   },
  //   {
  //     topicName:'MACHINE LEARNING',
  //     imagePath:'assets/images_courses/web-development.png'
  //   },
  //   {
  //     topicName:'WEB DEVELOPMENT',
  //     imagePath:'assets/images_courses/web-development.png'
  //   }
  // ];

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

  openOverlay(): void {
    this.dialog.open(LoginComponent, {
      width: '400px', // Set width as needed
    });
  }

  goToHomepage(){
    this.router.navigate(['/home']);
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
    this.showTopicList = false;
    this.router.navigate(['/username/profilePage']);
    window.scrollTo({top:0,behavior:'smooth'});
  }

  navigateToWallet() {
    // Implement navigation to wallet page
    this.showTopicList = false;
    this.router.navigate(['/profilePage']);
    window.scrollTo({top:0,behavior:'smooth'});
  }

}
