import { Injectable } from '@angular/core';
import { Student } from './student';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestIntegrationService {

  constructor(private student:Student,private http:HttpClient) { }

   fetchData() {
    return this.http.get('http://localhost:8080/getData');
  }
}
