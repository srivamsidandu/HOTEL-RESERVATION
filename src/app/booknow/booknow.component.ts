import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css']
})
export class BooknowComponent implements OnInit {

  requestedby:any;
  msg1:any;

  constructor(public userser: UsersService,public myRouter : Router, public api :ActivatedRoute) { }


  msg :string="";
  ngOnInit(): void {
    this.api.params.subscribe((param:Params)=>{
      if(param.hotelid){
        this.userser.booknow(param.hotelid).subscribe((data:any[])=>{
          this.msg1=data[0].uname;
        })
      }
    })
  }


  reserve(form:NgForm){
    console.log(form.value);
    const requestedby=this.userser.wantuserid();
    this.userser.bookhotelnowpage(form.value,requestedby).subscribe((data:any)=>{
        this.msg =data;
        this.myRouter.navigateByUrl("/payment");
    },(error:any)=>{
        console.log(error);
      this.msg = "EVERYTHING IS WRONG";

    });


  }
}
