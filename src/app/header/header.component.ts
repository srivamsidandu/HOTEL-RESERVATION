import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public userSer: UsersService,public myRouter :Router) { }

  ngOnInit(): void {
    
  }
  dologout(){
    localStorage.clear();
   this.myRouter.navigateByUrl("/");
}


getUserId(){
  return this.userSer.wantuserid();
}


isadmin(){
  let Role =localStorage.getItem("usertype");
  if(Role=="admin"){
    return true;
  }
  else{
    return false;
  }
}

}
