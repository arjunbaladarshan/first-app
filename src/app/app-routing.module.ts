import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddFacultyComponent } from './add-faculty/add-faculty.component';
import { ContactComponent } from './contact/contact.component';
import { DetailFacultyComponent } from './detail-faculty/detail-faculty.component';
import { FacultyComponent } from './faculty/faculty.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path:'', component:StudentsComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'faculty',component:FacultyComponent},
  {path:'faculty/add',component:AddFacultyComponent},
  {path:'faculty/edit/:id',component:AddFacultyComponent},
  {path:'faculty/:id',component:DetailFacultyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
