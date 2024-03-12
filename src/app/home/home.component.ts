import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  collegeName = 1235.579252;
  cityName = "rajkot";
  abc = "arjun"
  student = {
    name:3,
    semester:2,
    department:'MCA'
  }

  cDate = new Date();

  imgWidth=200;
  imgPath = "https://darshan.ac.in/U01/Faculty-Photo/5---29-04-2023-11-00-29.jpg";

  btnPlusClicked(){
    this.imgWidth +=10;
  }
  btnMinusClicked(){
    this.imgWidth -=10;
  }

}
