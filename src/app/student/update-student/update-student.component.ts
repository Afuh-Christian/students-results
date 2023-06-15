import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private studentService:StudentService
  ) { }

  id: Number = 0;

  student: any;
  
  getOne(id: Number): void {
    this.studentService.getOne(id)
      .subscribe(student => this.student = student )
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.id = Number(id) 
    this.getOne(Number(id))
  }

  goback(): void {
    this.location.back()
  }


  //update
  update(): void {
    if (this.student) {
      this.studentService.updateHero(this.student)
        .subscribe(() => this.location.back());
    }
  }
}




