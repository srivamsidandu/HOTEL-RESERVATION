import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-addhotel',
  templateUrl: './addhotel.component.html',
  styleUrls: ['./addhotel.component.css']
})
export class AddhotelComponent implements OnInit {

  msg : string="";

  newhotelnameavail = false;


  constructor( public userser : UsersService, public myrouter:Router ) { }

  ngOnInit(): void {

  }
  addhotels(form:NgForm){
    console.log(form.value);
    this.userser.addnewhotel(form.value).subscribe((data:any)=>{
        this.msg =data;
        this.myrouter.navigateByUrl("/booking");
    },(error:any)=>{
        console.log(error);
      this.msg = "EVERYTHING IS WRONG";

    });

}

hotelnameavailornot(uname:string){
  this.userser.hotelnameavail(uname).subscribe((data:any[])=>{
    console.log(data);
    if(data.length==0){
      this.msg="Hotel name Available";
      this.newhotelnameavail = true;
    }
    else{
      this.msg = "Hotel name already taken";
      this.newhotelnameavail = false;
    }
  })
}



}

