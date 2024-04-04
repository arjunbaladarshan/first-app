import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiFacultyService {
  apiUrl = "https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties";
  constructor(private _http: HttpClient) { }

  getAll(){
    return this._http.get(this.apiUrl);
  }

  getById(id:number){
    return this._http.get(this.apiUrl+"/"+id);
  }
  delete(id:number){
    return this._http.delete(this.apiUrl+"/"+id);
  }

  insert(form:any){
    return this._http.post(this.apiUrl,form);
  }
  update(form:any,id:number){
    return this._http.put(this.apiUrl+"/"+id,form);
  }
}
