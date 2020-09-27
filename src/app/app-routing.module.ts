import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddExamComponent } from './add-exam/add-exam.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ExamListComponent } from './exam-list/exam-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [

  {path:'',redirectTo: 'student', pathMatch:'full'},
  {path:'students',component : StudentListComponent},
  { path: 'update/:id', component: UpdateStudentComponent },
  { path: 'addstudent', component: AddStudentComponent },
  { path: '', redirectTo: 'exam', pathMatch: 'full' },
  { path: 'exams', component: ExamListComponent },
  { path: 'addexam', component: AddExamComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
