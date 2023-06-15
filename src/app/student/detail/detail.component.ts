import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'; 
import { StudentService } from 'src/app/student.service';
import { Course, Student } from '../types';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  
    // = ; 
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private studentService:StudentService
  ) { 

  }

  goback(): void {
    this.location.back()
  }

  id: Number = 0;

  student: any;
  
  getOne(id: Number): void {
 
    this.studentService.getOne(id)
      .subscribe(student => this.student = student )
  }



  courseGrade(a : number): any {
    if (a > -1 && a < 40)   return "F"
    if (a > 39 && a < 45)   return "D"
    if (a > 44 && a < 50)   return "D+"
    if (a > 49 && a < 55)   return "C"
    if (a > 54 && a < 60)   return "C+"
    if (a > 59 && a < 70)   return "B"
    if (a > 69 && a < 80)   return "B+"
    if (a > 79 && a < 101)   return "A"
  }

value: number = 0;

averagevalue: number = 0
  
  average(courses: Array<Course>): void {
    this.value = 0
    if(courses.length > 0){
      courses?.forEach((c) => {
      this.value += c.CA 
      this.value += c.exam    
    })
    const len = Number(courses?.length)
    const ave = this.value / len
    this.averagevalue =  ave
    } else {
      this.averagevalue =  0
    }
  
  }


  // get all .............................
  courses: Array<Course> = [];

  getAll(): void{
    this.studentService.getAllCourses()
      .subscribe(courses => {
        this.courses = courses
        this.courses = this.courses.filter(c => this.id === c.studentID)
        console.log(this.courses)
        this.average(this.courses)
      })
  
 
  }


  // Delete .....
  delete(course: Course): void {
    this.studentService.deleteCourse(course.id).subscribe(
      () => {
        // this.courses = this.courses.filter(course => course.id !== course.id);
        // this.ngOnInit()
        this.getAll()
      }
    );
  }


    // Add course ... 

    CA: number = 0; 
    exam: number = 0; 
    name : string = ""
  
  
  addcourse(name: string, CA: number, exam: number, studentID: number): any{
      if (CA > 30) return alert("CA can't be over 30") 
    if (exam > 70) return alert("Exam can't be over 70")
    const conflict = this.courses.filter(c => name === c.name)
    if(conflict.length > 0) return alert(`You'v already registered ${conflict[0].name}`)
      this.studentService.addCourse({ name, CA , exam , studentID  } as Course).subscribe(
        () => {
          this.getAll()
          this.CA = 0; 
          this.exam= 0; 
          this.name  = ""
        })
     
    }






  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.id = Number(id) 
    this.getOne(Number(id))
    this.getAll()
   console.log(" Add course clicked ")

  }

}
