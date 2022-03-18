import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  msg:string="";

  regusernameavail = false;
  constructor(public  userser: UsersService,public myrouter : Router) { }

  ngOnInit(): void {
  }

  formRegistered(form:NgForm){

    console.log("registration completed");
    console.log(form.value);
    this.userser.formRegistration(form.value).subscribe((data :string)=>{
        console.log(data);
      this.msg = data;
      form.reset();
      this.myrouter.navigateByUrl("/");
    },(error:any)=>{
          console.log(error);
        this.msg="Something went wrong";
    });
  }

  registername(uname:string){
    this.userser.registernameavailability(uname).subscribe((data : any[])=>{
      console.log(data);
      if(data.length==0){
        this.msg="User name Available";
        this.regusernameavail = true;
      }
      else{
        this.msg = "User name already taken";
        this.regusernameavail = false;
      }
    },(error:any)=>{
      console.log(error);
      this.msg="Something went wrong"
    });
  }

}
