import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute,Params, Router} from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-edithotels',
  templateUrl: './edithotels.component.html',
  styleUrls: ['./edithotels.component.css']
})
export class EdithotelsComponent implements OnInit {
  msg:string="";

  constructor(public activeRouter : ActivatedRoute,public userSer : UsersService, public myRouter :Router) { }

  hotelData : {_id:number;uname:string;urate:String;uemail:string;uphone:string;};



  ngOnInit(): void {

    this.activeRouter.params.subscribe((param:Params)=>{

      console.log(param);

    if(param.hotelid)
    {

      this.userSer.getsinglehoteldata(param.hotelid).subscribe((data:any[])=>{
        console.log(data);

        this.hotelData=data[0];

      },(error:any)=>{

        console.log(error);
      
      })
    }
  });
  }

  edithotel(form:NgForm){

    form.value._id= this.hotelData._id;

    this.userSer.editsinglehoteldata(form.value).subscribe((data:string)=>{
      console.log(data);
    this.msg= data;
    this.myRouter.navigateByUrl("/booking");

    },(error)=>{
      console.log(error);
      this.msg = "Something Went wrong";
    })
  }





}
