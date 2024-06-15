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

  showTopicList!:boolean  ;
  courseFilter: string = '';
  loading: boolean = false;
  login:boolean = false;



  @ViewChild('searchResults') searchResultsRef!: ElementRef;
  @ViewChild('scrollTarget') scrollTargetRef!: ElementRef;

  constructor(private router:Router,private dialog : MatDialog,private userService: StateService) {

    // localStorage.clear();
    this.showTopicList=userService.getTopicListFlag();
    console.log("on constructor show topic list",this.showTopicList);
    // console.log("courseLists component showTopicList: ",this.showTopicList);


    // if(userService.getReloadFlag()){


    // }

  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event:Event) {
    console.log("inside forward button",event);


    this.userService.setTopicListFlag(false);

    // localStorage.setItem('lastRoute', this.router.url);

  }

  // @HostListener('window:beforeunload', ['$event'])
  // beforeUnloadHandler(event: Event) {
  //   this.userService.setReloadFlag(true);
  //   localStorage.setItem('lastRoute', this.router.url);
  // }

  // @HostListener('window:beforeunload', ['$event'])
  // onPopState(event: any) {

  //   const storedRoute = localStorage.getItem('lastRoute');
  //   console.log(storedRoute);
  //   if (storedRoute) {
  //     this.router.navigateByUrl(storedRoute);
  //   }
  // }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler(event: Event) {
    localStorage.setItem('lastRoute', this.router.url);
  }

  navigateToKourses(imageName: string){
    this.showTopicList = false;
    this.userService.setTopicListFlag(this.showTopicList);
    this.router.navigate(['/courses',imageName]);
    window.scrollTo({top:0,behavior:'smooth'});
  }

  topicList: TopicList[] = [];

  ngOnInit(): void {

    this.getTopicList();
    this.userService.courselistRefreshTopicList.subscribe(() =>{
      this.topicListRefresh();
    });


    if (this.userService.isBackNavigation()) {
      console.log("entered here for back");
      this.showTopicList = true;
      // this.userService.setTopicListFlag(this.showTopicList);
      this.userService.resetBackNavigationFlag();
    }
    // else{
    //   this.showTopicList = this.userService.getTopicListFlag();
    // }

    console.log("courseLists component showTopicList: ",this.showTopicList);
 
  }

  topicListRefresh(){
    this.showTopicList = this.userService.getTopicListFlag();

  }



  getTopicList(){
    this.userService.getTopicList().subscribe(data =>{
      this.topicList = data;
    });
  }


    //loader  (input)="loaderOnInput($event)"
  loaderOnInput(event: any){
    // Show loader when input changes
    this.loading = true;

    // Simulate API call or search operation delay
    setTimeout(() => {
      // Hide loader after a delay (e.g., after API call completes)
      this.loading = false;
    }, 2000); // Adjust the delay as needed
  }


  scrollToSearchResults() {
    console.log("searchResultsRef",this.searchResultsRef);
    window.scrollTo({top:400,behavior:'smooth'});
  }



  // topic!:TopicList[];
  topic!:TopicList[];
  getTopicOfType(type:string){

    this.userService.getTopicOfType(type).subscribe(data=>{

      this.topicList = data;
      // console.log("on click of type: ",this.topic);
    });
  }


}
