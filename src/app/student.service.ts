import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private findall='http://localhost:8080/students';
  private url='http://localhost:8080/student';

  constructor(private http : HttpClient) { }

  getStudents() : Observable<any>
  {
      return this.http.get(`${this.findall}`);
  }

  getstudent(id : number) : Observable<any>
  {
    return this.http.get(`${this.url}/${id}`);
  }

  addStudent(student : object) : Observable<object>
  {
    return this.http.post(`${this.url}`,student);
  }

  updateStudnt(student : object) : Observable<object>
  {
    return this.http.put(`${this.url}`,student);
  }

  deleteStudent(id : number) : Observable<any>
  {
    return this.http.delete(`${this.url}/${id}`);
  }

}
