import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { StudentsComponent } from './students/students.component';
import { FacultyComponent } from './faculty/faculty.component';
import {  HttpClientModule } from '@angular/common/http';
import { DetailFacultyComponent } from './detail-faculty/detail-faculty.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AddFacultyComponent } from './add-faculty/add-faculty.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    StudentsComponent,
    FacultyComponent,
    DetailFacultyComponent,
    AddFacultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
