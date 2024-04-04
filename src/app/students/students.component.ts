import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  students = [
    {FacultyName:'arjun', FacultyInitial:'CEAVB',FacultyImage:'https://darshan.ac.in/U01/Faculty-Photo/15---28-04-2023-02-07-35.jpg'},
    {FacultyName:'swati mam', FacultyInitial:'CESRS',FacultyImage:'https://darshan.ac.in/U01/Faculty-Photo/11---29-04-2023-01-44-21.jpg'},
    {FacultyName:'rupesh sir', FacultyInitial:'CERGV',FacultyImage:'https://darshan.ac.in/U01/Faculty-Photo/10---28-04-2023-02-07-03.jpg'}
  ];

  idToUpdate = -1;

  tempFac = {
    FacultyName:'',
    FacultyImage:'',
    FacultyInitial:''
  }

  addFaculty(){
    this.students.push({...this.tempFac});
    this.tempFac.FacultyName = '';
    this.tempFac.FacultyInitial = '';
    this.tempFac.FacultyImage = '';

  }
  setDataForEdit(id:any){
    this.idToUpdate = id;
    this.tempFac = {...this.students[id]};
  }

  editFaculty(){
    this.students[this.idToUpdate] = {...this.tempFac};
    this.idToUpdate = -1;
    this.tempFac.FacultyName = '';
    this.tempFac.FacultyInitial = '';
    this.tempFac.FacultyImage = '';
  }
}
