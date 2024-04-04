import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiFacultyService } from '../api-faculty.service';
import { Faculty } from '../models/Faculty';

@Component({
  selector: 'app-detail-faculty',
  templateUrl: './detail-faculty.component.html',
  styleUrl: './detail-faculty.component.css'
})
export class DetailFacultyComponent {
  constructor(private _apiFaculty:ApiFacultyService, private _activatedRoute: ActivatedRoute, private _router:Router){}

  data = new Faculty();

  ngOnInit(){
    let id = Number(this._activatedRoute.snapshot.paramMap.get('id'));
    this._apiFaculty.getById(id).subscribe((res:any)=>{
      this.data = res;
    });
  }

  deleteFac(id:any){
    this._apiFaculty.delete(id).subscribe(res=>{
      this._router.navigate(['faculty']);
    });
  }

  handleDenial(){
    // kai nai
  }
}
