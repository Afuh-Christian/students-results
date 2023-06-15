import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router'
import { Student } from '../types';

@Component({
  selector: 'app-deletestudent',
  templateUrl: './deletestudent.component.html',
  styleUrls: ['./deletestudent.component.css']
})
export class DeletestudentComponent implements OnInit {

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

  goback(): void{
    this.location.back()
  }


  // delete .....   
  delete(student: Student): void {
    this.studentService.deleteHero(student.id).subscribe(
      () =>  this.location.back()
    );
  }



  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.id = Number(id) 
    this.getOne(Number(id))
  }

}
