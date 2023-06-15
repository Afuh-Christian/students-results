import { Injectable } from '@angular/core';
import { Course, Student } from './student/types';
import { HttpClient, HttpHeaders } from 
  '@angular/common/http';

import { Observable , of} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentUrl = "api/students"
  private coursesUrl = "api/courses"
  constructor(
    private http: HttpClient,
    // private messageService: MessageService
  ) { }

  // Get All students ...
  getAll(): Observable<Student[]> { 
    return this.http.get<Student[]>(this.studentUrl)
  }



  /* GET heroes whose name contains search term */
searchHeroes(term: string): Observable<Student[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Student[]>(`${this.studentUrl}/?name=${term}`)





  //   .pipe(
  //   tap(x => x.length ?
  //      this.log(`found heroes matching "${term}"`) :
  //      this.log(`no heroes matching "${term}"`)),
  //   catchError(this.handleError<Hero[]>('searchHeroes', []))
  // );
}



  // Get All Courses ...
  getAllCourses(): Observable<Course[]> { 
    return this.http.get<Course[]>(this.coursesUrl)
  }


  // Get One Student .....
  getOne(id: Number): Observable<Student> {
    const url = `${this.studentUrl}/${id}`
    return this.http.get<Student>(url)
  }

  // Get One Course .....
  getOneCourse(id: Number): Observable<Course> {
    const url = `${this.coursesUrl}/${id}`
    return this.http.get<Course>(url)
  }



  // Update Student ....
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  updateHero(student: Student): Observable<any> {
    return this.http.put(this.studentUrl, student, this.httpOptions)
  }

  // Update course 
  updateCourse(course: Course): Observable<any> {  
    return this.http.put(this.coursesUrl, course, this.httpOptions)
  }



// Add Student ..... 
addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.studentUrl, student, this.httpOptions)
}
// Add addCourse ..... 
addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.coursesUrl, course, this.httpOptions)
}
  


/** DELETE: delete the hero from the server */
deleteHero(id: number): Observable<Student> {
  const url = `${this.studentUrl}/${id}`;

  return this.http.delete<Student>(url, this.httpOptions)
  //   .pipe(
  //   tap(_ => this.log(`deleted hero id=${id}`)),
  //   catchError(this.handleError<Student>('deleteHero'))
  // );
}
/** DELETE: delete the hero from the server */
deleteCourse(id: number): Observable<Course> {
  const url = `${this.coursesUrl}/${id}`;

  return this.http.delete<Course>(url, this.httpOptions)
  //   .pipe(
  //   tap(_ => this.log(`deleted hero id=${id}`)),
  //   catchError(this.handleError<Student>('deleteHero'))
  // );
}
  





  get(id:string): any {
    
  }

  create(object: any): any {
    return []
  }

  edit(id:string): any{

  }

  del(): any{

  }
}
