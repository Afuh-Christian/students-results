import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { DetailComponent } from './detail/detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentService } from '../student.service';
import { ListstudentsComponent } from './liststudents/liststudents.component';
import { AppRoutingModule } from './student-routing.module';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { FormsModule } from '@angular/forms';
import { UpdatecourseComponent } from './updatecourse/updatecourse.component';
import { DeletestudentComponent } from './deletestudent/deletestudent.component';




@NgModule({
  declarations: [
    StudentComponent,
    DetailComponent,
    NavbarComponent,
    ListstudentsComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    UpdatecourseComponent,
    DeletestudentComponent,
  ],
  imports: [
    CommonModule,FormsModule, AppRoutingModule  
  ], 
  providers: [
    StudentService,
  ],
  exports: [
    StudentComponent , 
  ],
 
})
export class StudentModule { }
