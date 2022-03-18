import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http: HttpClient,public myRouter: Router){ }

  formRegistration(data:string){
    return this.http.post<string>("http://localhost:3000/register",data);
  }


  registernameavailability(uname : string){
    return this.http.get<any[]>("http://localhost:3000/registername/" +uname );
  }


  Hotellogin(data:any){
      return this.http.post<any[]>("http://localhost:3000/login",data);
  }
  isLoggedin(){
    return !!localStorage.getItem("loggedUser");
  }

  addnewhotel(data:any){
    return this.http.post<any>("http://localhost:3000/allhotels",data);
  }

  hotelnameavail(uname : string){
    return this.http.get<any[]>("http://localhost:3000/hotelname/" +uname );
  }

  getallhotels(){
    return this.http.get<any[]>("http://localhost:3000/managehotels");
  }

  bookingpage(){
    return this.http.get<any[]>("http://localhost:3000/pagetobook");
  }

  bookhotelnowpage(data :any,requestedby:any){
    data.requestedby= requestedby;
    return this.http.post<any>("http://localhost:3000/booknowbutton",data);
  }

  coustomerbookingdata(){
    return this.http.get<any[]>("http://localhost:3000/customerdata");
  }

  getsinglehoteldata(SinglehotelId:String){
    return this.http.get<any[]>("http://localhost:3000/getuser/"+SinglehotelId);
  }

  editsinglehoteldata(data:any){
    return this.http.put<string>("http://localhost:3000/updatehotel",data);
  }

  deletehoteldata(hotelId:number){
     return this.http.delete<string>("http://localhost:3000/deletehotel/" +hotelId);
  }

  searchhotel(search:string){
    return this.http.get<any[]>("http://localhost:3000/search/"+search);
  }

  searchhotelinbookingpage(search : string){
    return this.http.get<any[]>("http://localhost:3000/searchinbookingpage/"+search);
  }

  getmybookings(userId:any){
    return this.http.get<any[]>("http://localhost:3000/mybookings/"+userId);
  }

  wantuserid(){
    return localStorage.getItem("loggedUser");
  }

  booknow(hotelid:string){
    return this.http.get<any[]>("http://localhost:3000/booknow/"+hotelid);
  }




  

}
