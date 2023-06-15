import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { AddStudentComponent } from './add-student/add-student.component';
import { DeletestudentComponent } from './deletestudent/deletestudent.component';

import { DetailComponent } from './detail/detail.component';
import { ListstudentsComponent } from './liststudents/liststudents.component';
import { StudentComponent } from './student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { UpdatecourseComponent } from './updatecourse/updatecourse.component';


const routes: Routes = [
    { path: "", component: ListstudentsComponent },
  { path: "details/:id", component: DetailComponent },
  { path: "add", component: AddStudentComponent },
  { path: "update/:id", component: UpdateStudentComponent },
  { path: "delete/:id", component: DeletestudentComponent },
  { path: "updatecourse/:id/:idCourse", component: UpdatecourseComponent },

]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }