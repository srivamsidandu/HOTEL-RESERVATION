import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  msg:string="";
  result: any[]=[];
  constructor(public userser : UsersService) { }

  ngOnInit(): void {
    this.userser.coustomerbookingdata().subscribe((data:any[])=>{
      console.log(data);
      this.result= data;
      
    },(error:any)=>{
      console.log(error);
      this.msg ="Something went wrong!";
    })
  }


}
