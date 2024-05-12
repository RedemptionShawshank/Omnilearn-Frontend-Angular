import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from './user';
import { TopicList } from './topic-list';
import { LoginInfo } from './login-info';
import { Router } from '@angular/router';
import { PlatformCourseList } from './platform-course-list';
import { FavouriteList } from './favourite-list';


@Injectable({
  providedIn: 'root'
})
export class StateService {

  login:boolean = false;
  receivedInfo!: any;
  receivedPlatformList!:any;
  // topicList: boolean = true;
  private backNavigationFlag = false;
  username:string ='';
  topicName!:string;
  reload:boolean = false;

  private courseListCompTrigger = new Subject<void>();
  private topiclistTrigger = new Subject<void>();
  courselistRefresh = this.courseListCompTrigger.asObservable();
  courselistRefreshTopicList = this.topiclistTrigger.asObservable();

  setReloadFlag(flag:boolean){
    this.reload = flag;
    localStorage.setItem("reload",String(this.reload));
  }

  getReloadFlag():boolean{
    const flag = localStorage.getItem("reload");
    if(flag=='true'){
      return true;
    }
    else if(flag=='false'){
      return false;
    }
    else{
      return true;
    }
  }


  setTopicListFlag(status:boolean){
    // console.log("topicList status",status);
    // if(status == null){
    //   localStorage.setItem('topicListFlag',String(this.topicList));
    // }
    // else{
    //   this.topicList = status;
    //   localStorage.setItem('topicListFlag',String(this.topicList));
    // }

    localStorage.setItem('topicListFlag',String(status));

    this.topiclistTrigger.next();

  }

  getTopicListFlag():boolean{

    const storedValue: string | null = localStorage.getItem('topicListFlag');

    if(storedValue === 'true'){
      // this.topicList = true;
      return true;
    }
    else if(storedValue === 'false'){
      // this.topicList = false;
      return false;
    }
    else{
      return true;
    }

  }

  constructor(private httpClient:HttpClient,private router:Router) {

    window.addEventListener('popstate', () => {
      // Check if the user navigated back
      this.backNavigationFlag = true;
    });

  }

  //handling back navigation--
  isBackNavigation(): boolean {
    return this.backNavigationFlag;
  }

  resetBackNavigationFlag(): void {
    this.backNavigationFlag = false;
  }

  // this method in service updates the value of login flag and also stores it in local storage
  loginStatus(status: boolean): void {
    this.login = status;
    localStorage.setItem('loginStatus', String(this.login));
  }



  notifyComponentBRefresh() {
    this.courseListCompTrigger.next();
  }

  private baseURL = "https://incredible-trust-production.up.railway.app";
  private baseURLuserList = "https://incredible-trust-production.up.railway.app/api/v1/users";
  private baseURLtopicList  = "https://incredible-trust-production.up.railway.app/api/v1/topic_list";
  private baseURLaddUserInfo = "https://incredible-trust-production.up.railway.app/api/v1/userInfo";
  private baseURLloginInfo = "https://incredible-trust-production.up.railway.app/api/v1/loginInfo";

  getUserList():Observable<User[]>{

    return this.httpClient.get<User[]>(`${this.baseURLuserList}`) ;

  }

  getTopicList():Observable<TopicList[]>{
    return this.httpClient.get<TopicList[]>(`${this.baseURLtopicList}`);
  }

  sendPathVariable(data: string){

    this.topicName = data;

    this.httpClient.post<string>('https://incredible-trust-production.up.railway.app/api/v1/path-variable',data).subscribe(value =>{
      this.receivedPlatformList = value;
    });

    return this.httpClient.post<string>('https://incredible-trust-production.up.railway.app/api/v1/path-variable',data);
  }

  getFavouriteList(userName:string,topicName:string):Observable<FavouriteList[]>{
    const body = {
      userName:userName,
      topicName:topicName
    };
    return this.httpClient.post<FavouriteList[]>('https://incredible-trust-production.up.railway.app/api/v1/favList',body);
  }

  getFavouriteListByUsername(userName:string):Observable<FavouriteList[]>{
    return this.httpClient.post<FavouriteList[]>('https://incredible-trust-production.up.railway.app/api/v1/userFavlist',userName);
  }

  addFavourite(favorite: FavouriteList):Observable<FavouriteList[]>{
    return this.httpClient.post<FavouriteList[]>('https://incredible-trust-production.up.railway.app/api/v1/addFavourite',favorite);
  }

  addUserinfo(user: User): Observable<Object>{ // if we don't know what is the response type of our api, we can add "Object or any" type in Observable
    return this.httpClient.post(`${this.baseURLaddUserInfo}`,user);
  }

  sendLoginInfo(loginInfo: LoginInfo): Observable<Object>{
    this.httpClient.post(`${this.baseURLloginInfo}`,loginInfo,{responseType: 'json'}).subscribe(data =>{
      this.receivedInfo = data;

      localStorage.setItem('recievedData',JSON.stringify(this.receivedInfo));

      const info = localStorage.getItem('recievedData');
      const parsedUser = info ? JSON.parse(info) : null;
      // console.log("info in local storage: ",parsedUser);

      if(parsedUser){
        this.receivedInfo = parsedUser;
      }

      // console.log("value of received info",this.receivedInfo);
    });

    return this.httpClient.post(`${this.baseURLloginInfo}`,loginInfo,{responseType: 'json'});
  }

  deletefavorite(courseId: number) {
    return this.httpClient.delete(`${this.baseURL}/api/v1/remove/${courseId}`);
  }




}
