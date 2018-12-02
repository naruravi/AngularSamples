import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseUrl: string = "assets/student.json";
  constructor(private httpClient: HttpClient) {

  }

  getStudents(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }
}
