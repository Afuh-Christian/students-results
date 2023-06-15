import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { StudentService } from 'src/app/student.service';
import { Student } from '../types';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(
    private location: Location,
    private studentService:StudentService
  ) { }

  name: string = ""
  mat: string = ""

  add(name: string, mat: string): void{
    const conflict = this.students.filter(s => mat === s.mat) 
    if(conflict.length > 0 )return alert(`${mat} is being used .`)
    this.studentService.addStudent({ name, mat } as Student).subscribe(
      () => this.location.back()
    )
  }



  students: Array<Student> = [];

  getAll(): void{
    this.studentService.getAll()
    .subscribe(students => this.students = students)
  }


  goback(): void {
    this.location.back()
  }

  ngOnInit(): void {
  this. getAll()
  }

}
