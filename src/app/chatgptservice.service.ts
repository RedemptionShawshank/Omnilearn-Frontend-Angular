import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatgptserviceService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://api.openai.com/v1/chat/completions'; // Update with the correct endpoint if needed
  private apiKey = environment.openAIApiKey;

  getChatResponse(prompt: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    const body = {
      prompt: prompt,
      max_tokens: 150, // Adjust as needed
      temperature: 0.7, // Adjust as needed
    };

    return this.http.post<any>(this.apiUrl, body, { headers: headers });
  }
}
