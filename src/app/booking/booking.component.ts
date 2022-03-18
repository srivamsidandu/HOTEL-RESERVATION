import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(public userser : UsersService) { }


  bookpage : any[]=[];
  msg : string="";
  ngOnInit(): void {
    this.userser.getallhotels().subscribe((data:any[])=>{
      console.log(data);
      this.bookpage= data;
    },(error:any)=>{
      console.log(error);
      this.msg ="Something went wrong!";
    })
  }

  searchhotel(search:string){

    this.userser.searchhotel(search).subscribe((data:any[])=>{

      console.log(data);

      this.bookpage = data;

    },(error:any)=>{

      console.log(error);
      
    });
  }
  isRam(){
    this.userser.getallhotels().subscribe((data:any[])=>{
      if(data[0]=="RAMCHANDRA"){
        
      }
    })
  }

  

}
