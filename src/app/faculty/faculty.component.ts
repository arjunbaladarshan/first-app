import { Component } from '@angular/core';
import { ApiFacultyService } from '../api-faculty.service';
import { Faculty } from '../models/Faculty';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.css'
})
export class FacultyComponent {
  faculties:Faculty[] = [];

  constructor(private _apiFaculty:ApiFacultyService){}

  ngOnInit(){
    this._apiFaculty.getAll().subscribe((res:any)=>{
        this.faculties = res;
    });
  }


}
