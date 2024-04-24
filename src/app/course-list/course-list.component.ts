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

  showTopicList:boolean = true;
  courseFilter: string = '';
  loading: boolean = false;
  login:boolean = false;

  // private subscription: Subscription;


  @ViewChild('searchResults') searchResultsRef!: ElementRef;
  @ViewChild('scrollTarget') scrollTargetRef!: ElementRef;

  constructor(private router:Router,private dialog : MatDialog,private userService: StateService) {



    // this.subscription = this.userService.isVariableEnabled$.subscribe(enabled => {
    //   if(localStorage.getItem('isVariableEnabled') == null ){
    //     this.login = enabled;
    //   }
    //   if(!Boolean(localStorage.getItem('isVariableEnabled'))){
    //     this.login = enabled;
    //   }

    //   console.log("old value in subscription: ",localStorage.getItem('isVariableEnabled'))

    // });

    // console.log("old value: ",localStorage.getItem('isVariableEnabled'));


    // if(localStorage.getItem('isVariableEnabled') != null){
    //   this.login = Boolean(localStorage.getItem('isVariableEnabled'));

    // }

    // if(Boolean(localStorage.getItem('loginStatus'))){
    //   this.login = Boolean(localStorage.getItem('loginStatus'));
    // }

    // localStorage.clear();

    console.log("came into course list component");

    const storedValue: string | null = localStorage.getItem('loginStatus');

    console.log("login before in constructor: ",this.login);
    if(storedValue === 'true'){
      this.login = true;
    }
    else{
      this.login = false;
    }

    console.log("login after in constructor: ",this.login);




  }

  logOut() {

    this.login = false;
    // console.log("logout value: ",this.login);
    // console.log("before setting: ",localStorage.getItem('isVariableEnabled'))
    localStorage.setItem('loginStatus', String(this.login));
    // console.log("after setting: ",localStorage.getItem('isVariableEnabled'))
    window.scrollTo({top:0,behavior:'smooth'});
  }

  navigateToKourses(imageName: string){
    this.showTopicList = false;
    this.router.navigate(['/courses',imageName]);
    window.scrollTo({top:0,behavior:'smooth'});
  }

  topicList!: TopicList[];

  ngOnInit(): void {

    this.getTopicList();

    this.userService.componentBRefresh.subscribe(() => {
      this.refreshComponent();
    });


    
  }

  refreshComponent(){

    console.log("login before in refresh: ",this.login);
    const storedValue1: string | null = localStorage.getItem('loginStatus');

    if(storedValue1 === 'true'){
      this.login = true;
    }
    else{
      this.login = false;
    }

    console.log("login after in refresh: ",this.login);

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



}
