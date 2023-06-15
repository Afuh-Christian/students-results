import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router'
import { Course } from '../types';


@Component({
  selector: 'app-updatecourse',
  templateUrl: './updatecourse.component.html',
  styleUrls: ['./updatecourse.component.css']
})
export class UpdatecourseComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private studentService:StudentService
  ) { }

  id: Number = 0;

  course: any;
  
  getOneCourse(id: Number): void {
    this.studentService.getOneCourse(id)
      .subscribe(course => this.course = course )
  }


  // get all .............................
  courses: Array<Course> = [];

  getAll(id: number): void{
    this.studentService.getAllCourses()
      .subscribe(courses => {
        this.courses = courses
        this.courses = this.courses.filter(c => this.id === c.studentID)
        // console.log(this.courses)
        // this.average(this.courses)
      })
  }



  goback():void{
    this.location.back()
  }



  ngOnInit(): void {
    const idStudent = this.route.snapshot.paramMap.get('id')
    this.getAll(Number(idStudent))



    const id = this.route.snapshot.paramMap.get('idCourse')
    this.id = Number(id) 
    this.getOneCourse(Number(id))
  }


    //update
  update(): any {
    if (this.course.CA > 30) return alert("CA can't be over 30") 
    if (this.course.exam > 70) return alert("Exam can't be over 70")
    const conflict = this.courses.filter(c => this.course.name === c.name)
    // if(conflict.length > 0) return alert(`You'v already registered ${conflict[0].name}`)
      if (this.course) {
        this.studentService.updateCourse(this.course)
          .subscribe(() => this.location.back());
      }
    }

}
