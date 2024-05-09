import { Component,ViewChild, ElementRef, HostListener, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { StateService } from '../state.service';
import { TopicList } from '../topic-list';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {

  showTopicList:boolean;
  courseFilter: string = '';
  loading: boolean = false;
  login:boolean = false;



  @ViewChild('searchResults') searchResultsRef!: ElementRef;
  @ViewChild('scrollTarget') scrollTargetRef!: ElementRef;

  constructor(private router:Router,private dialog : MatDialog,private userService: StateService) {

    // const storedValue: string | null = localStorage.getItem('topicListFlag');
    

    // if(storedValue === 'true'){
    //   this.showTopicList = true;
    // }
    // else{
    //   this.showTopicList = false;
    // }
    // console.log("courseLists component showTopicList: ",this.showTopicList);

    this.showTopicList=userService.getTopicListFlag();
    console.log("courseLists component showTopicList: ",this.showTopicList);


  }

  navigateToKourses(imageName: string){
    this.showTopicList = false;
    this.router.navigate(['/courses',imageName]);
    window.scrollTo({top:0,behavior:'smooth'});
  }

  topicList!: TopicList[];

  ngOnInit(): void {

    this.getTopicList();
    this.userService.courselistRefreshTopicList.subscribe(() =>{
      this.topicListRefresh();
    });

    if (this.userService.isBackNavigation()) {

      this.showTopicList = true;
      this.userService.resetBackNavigationFlag();
    }
 
  }

  topicListRefresh(){
    this.showTopicList = this.userService.getTopicListFlag();

  }



  private getTopicList(){
    this.userService.getTopicList().subscribe(data =>{
      this.topicList = data;
      // console.log("topic list: ",this.topicList);
    });

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

  // goToHomepage(){
  //   this.router.navigate(['/home']);
  // }
  
  // isHovered: boolean = false;

  // showDropDown(){

  //   this.isHovered = !this.isHovered;

  // }

  // @HostListener('document:click', ['$event'])
  // onClickOutside(event: Event) {
  //   if (!((event.target as HTMLElement).closest('.btn') || (event.target as HTMLElement).closest('.options'))) {
  //     this.isHovered = false;
  //   }
  // }

  // navigateToProfile() {
  //   this.showTopicList = false;
  //   this.router.navigate(['/username/profilePage']);
  //   window.scrollTo({top:0,behavior:'smooth'});
  // }



}
