import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../student.service';
import { Student } from '../types';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';


@Component({
  selector: 'app-liststudents',
  templateUrl: './liststudents.component.html',
  styleUrls: ['./liststudents.component.css']
})
export class ListstudentsComponent implements OnInit {

  constructor(private studentService:StudentService) { }


  students: Array<Student> = [];

  getAll(): void{
    this.studentService.getAll()
    .subscribe(students => this.students = students)
  }


 
  


  // del(id:string): any{
  //   alert("Delete "+ id)
  // }

  delete(student: Student): void {
    this.studentService.deleteHero(student.id).subscribe(
      () => {
        // this.students = this.students.filter(student => student !== student);
        this.getAll()
      }
    );
  }


  edit(id:string): any{
    alert("Edit "+ id)
  }





  
  private searchTerms = new Subject<string>();
  students$!: Observable<Student[]>;
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }


  ngOnInit(): void {
    console.log(this.students$)
    this.students$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(100),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.studentService.searchHeroes(term)),
    );

    this.getAll()
  }

}
