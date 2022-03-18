import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-hotelmanagment',
  templateUrl: './hotelmanagment.component.html',
  styleUrls: ['./hotelmanagment.component.css']
})
export class HotelmanagmentComponent implements OnInit {

  constructor(public userser:UsersService) { }

  users: any[]=[];
  msg:string;
  ngOnInit(): void {
    this.userser.getallhotels().subscribe((data:any[])=>{
      console.log(data);
      this.users= data;
    },(error:any)=>{
      console.log(error);
      this.msg ="Something went wrong!";
    })
  }

  deleteonehotel(hotelId:number)
  {
      if(confirm("Are you sure you want to delete this Record?"))
      {
        this.userser.deletehoteldata(hotelId).subscribe((data:string)=>{

        this.msg = data;

        var index = this.users.findIndex((obj)=>{

            return obj._id == hotelId;
        });

        this.users.splice(index, 1);


      },(error:any)=>{

        console.log(error);
        this.msg="Something went wrong";

   });

      }
  }
        
  dosearch(search:string){

    this.userser.searchhotel(search).subscribe((data:any[])=>{

      console.log(data);

      this.users = data;

    },(error:any)=>{

      console.log(error);
      
    });
  }

}
