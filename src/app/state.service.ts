import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { TopicList } from './topic-list';


@Injectable({
  providedIn: 'root'
})
export class StateService {

  private baseURLuserList = "http://localhost:8080/api/v1/users";
  private baseURLtopicList  = "http://localhost:8080/api/v1/topic_list";

  constructor(private httpClient:HttpClient) { }

  getUserList():Observable<User[]>{

    return this.httpClient.get<User[]>(`${this.baseURLuserList}`) ;

  }

  getTopicList():Observable<TopicList[]>{
    return this.httpClient.get<TopicList[]>(`${this.baseURLtopicList}`);
  }

  sendPathVariable(data: string){
    return this.httpClient.post<string>('http://localhost:8080/api/v1/path-variable',data);
  }


}
