import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from './user';
import { TopicList } from './topic-list';
import { LoginInfo } from './login-info';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class StateService {

  login:boolean = false;
  receivedInfo!: any;


  private componentBRefreshSubject = new Subject<void>();
  componentBRefresh = this.componentBRefreshSubject.asObservable();

  notifyComponentBRefresh() {
    this.componentBRefreshSubject.next();
  }
  constructor(private httpClient:HttpClient,private router:Router) {


  }

  loginStatus(status: boolean): void {
    this.login = status;
    localStorage.setItem('loginStatus', String(this.login));
  }

  private baseURLuserList = "http://localhost:8080/api/v1/users";
  private baseURLtopicList  = "http://localhost:8080/api/v1/topic_list";
  private baseURLaddUserInfo = "http://localhost:8080/api/v1/userInfo";
  private baseURLloginInfo = "http://localhost:8080/api/v1/loginInfo";



  getUserList():Observable<User[]>{

    return this.httpClient.get<User[]>(`${this.baseURLuserList}`) ;

  }

  getTopicList():Observable<TopicList[]>{
    return this.httpClient.get<TopicList[]>(`${this.baseURLtopicList}`);
  }

  sendPathVariable(data: string){
    return this.httpClient.post<string>('http://localhost:8080/api/v1/path-variable',data);
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
      console.log("info in local storage: ",parsedUser);

      if(parsedUser){
        this.receivedInfo = parsedUser;
      }

      console.log("value of received info",this.receivedInfo);
    });

    return this.httpClient.post(`${this.baseURLloginInfo}`,loginInfo,{responseType: 'json'});
  }


}
