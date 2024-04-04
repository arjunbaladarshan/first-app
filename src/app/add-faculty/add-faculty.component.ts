import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiFacultyService } from '../api-faculty.service';
import { Faculty } from '../models/Faculty';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrl: './add-faculty.component.css'
})
export class AddFacultyComponent {
  data = new Faculty();

  id = -1;

  constructor(private _api:ApiFacultyService, private _router:Router, private _activatedRoute:ActivatedRoute){}  

  ngOnInit(){
    this.id = Number(this._activatedRoute.snapshot.paramMap.get('id'));
    if(this.id>0){
      this._api.getById(this.id).subscribe((res:any)=>{
        this.data = res;
      })
    }
  }
  
  save(form:any){
    if(this.id==0){
      this._api.insert(form).subscribe(res=>{
        this._router.navigate(['faculty']);
      });
    }
    else{
      this._api.update(form,this.id).subscribe(res=>{
        this._router.navigate(['faculty']);
      });
    }
    
  }
}
