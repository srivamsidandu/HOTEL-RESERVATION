import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg:string="";

  constructor(public userser:UsersService,public myrouter:Router) { }

  ngOnInit(): void {
  }
  dologin(form:NgForm){
    console.log(form.value);
    this.userser.Hotellogin(form.value).subscribe((data:any[])=>{
      console.log(data);
      if(data.length==0){
        this.msg="Invalid Login";
      }
      else{
        localStorage.setItem("loggedUser",data[0]._id);
        data[0].uname=="Adminuser"?localStorage.setItem('usertype','admin'):localStorage.setItem('usertype','user')
        this.msg="Successfully logged in";
        this.myrouter.navigateByUrl("/booking");
      }
    },(error:any)=>{
      console.log(error);

    })
}

}
