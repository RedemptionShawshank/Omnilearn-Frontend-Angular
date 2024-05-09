import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Options,LabelType } from '@angular-slider/ngx-slider';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { StateService } from '../state.service';
import { PlatformCourseList } from '../platform-course-list';
import { FavouriteList } from '../favourite-list';

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
  imageName!: string ;
  platformName: string= '';
  // platformLists: PlatformCourseList[] = this.service.receivedPlatformList;
  platformLists:any;
  isLoggedIn!:boolean ;


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
      localStorage.setItem('topicName',this.imageName);
      this.service.sendPathVariable(params['name'])
      .subscribe(response => {
        this.platformLists = response;
        console.log("platform list :",this.platformLists);
      });
    });

    this.updateLoggedInFlag();
    this.loadFavouriteList();
  }

  favouriteCourseId: number[] = [];

  loadFavouriteList(){

    const username = localStorage.getItem('userName');

    if(username !== null){
      this.service.getFavouriteList(username,this.imageName).subscribe((data) => {
        console.log("received favorite list: ", data);
        for(var i=0;i<data.length;i++){
          this.favouriteCourseId.push(data[i].courseId);
        }
        console.log("fav courses id: ",this.favouriteCourseId);
      },
      error=>console.log(error));
    }


  }

  updateLoggedInFlag(){

    const flag = localStorage.getItem('loginStatus');
    if(flag == 'true'){
      this.isLoggedIn = true;
    }
    else{
      this.isLoggedIn = false;
    }

    console.log("is logged in: ",this.isLoggedIn);

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


  // filteredCourses: Course[] = [];

  filteredCourses: PlatformCourseList[] = [] ;


  filterCoursesByPrice(minPrice: number, maxPrice: number,topicName: any): void {
    this.filteredCourses = [];


        for (const course of this.platformLists) {
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

        // console.log("filtered length: ",this.filteredCourses.length);
        // console.log("not reset full list: ",this.showFullListOfCourses);
        // console.log("not reset no result: ",this.showNoResult);

        if(this.filteredCourses.length === 0){
          // console.log("filtered length: ",this.filteredCourses.length);
          // console.log("if condition not reset full list: ",this.showFullListOfCourses);
          // console.log("if condition not reset no result: ",this.showNoResult);
          this.showNoResult = true;
          this.showFullListOfCourses = false;
        }
        else{
          // console.log("else condition not reset full list: ",this.showFullListOfCourses);
          // console.log("else condition not reset no result: ",this.showNoResult);
          this.showFullListOfCourses = false;
          this.showNoResult = false;
        }

    // console.log("filtered courses: ",this.filteredCourses);



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


  // active:boolean = false;


  saveFavourite:FavouriteList[] = [];


  // toggleFavorite(topic:any) {

  //   const isTopicAlreadySaved = this.savedCourses.find(savedTopic => savedTopic.id === topic.id);

  //   if(!isTopicAlreadySaved){
  //     // this.active = true;
  //     this.savedCourses.push(topic);
  //   }
  //   else{
  //     // this.active = false;
  //     const index = this.savedCourses.indexOf(topic);
  //     if(index != -1){
  //       this.savedCourses.splice(index,1);
  //     }

  //   }
  //   console.log("saved : ",this.savedCourses);
  // }

  // adding and removing favourite courses from specified topics
  addFavorite(topic:PlatformCourseList){

    const username = localStorage.getItem('userName');
    if(username !==null){
      let favorite = new FavouriteList(username,topic.id,topic.topicName,topic.platformName,topic.price,topic.affiliateLink,topic.desc,topic.imagePath,topic.rating);
      this.service.addFavourite(favorite).subscribe(data=>{
        console.log("favourite list: ",data);
      });
    }

  }

  removeFavorite(topic:PlatformCourseList){

    this.service.deletefavorite(topic.id).subscribe(
      () =>{
        console.log("removed favourite");
      },
      (error)=>{
        console.error("error in removing",error);
      }
    );

    console.log("updated fav list",)
  }

  handleFavoriteCourse(event:any,topic:PlatformCourseList){
    const loginCheck = localStorage.getItem('loginStatus');
    if(loginCheck == 'true'){
      if(event.target.checked){
        this.addFavorite(topic);
      }
      else{
        this.removeFavorite(topic);
      }
    }
    else{
      console.log("Please sign in");
    }

  }
  
}
