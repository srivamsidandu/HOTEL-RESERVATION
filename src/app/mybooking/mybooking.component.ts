import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-mybooking',
  templateUrl: './mybooking.component.html',
  styleUrls: ['./mybooking.component.css']
})
export class MybookingComponent implements OnInit {

  booking: any[]=[];

  constructor(public myRouter:ActivatedRoute,public userSer:UsersService) { }


  ngOnInit(): void {
    this.myRouter.params.subscribe((param:Params)=>{
      if(param.userId){
        this.userSer.getmybookings(param.userId).subscribe((data:any[])=>{
          this.booking=data;
        },(error:any)=>{
          console.log(error);
        })
      }
    })
  }

  
}
