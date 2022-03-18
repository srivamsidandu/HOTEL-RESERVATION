import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(public userser : UsersService,public myRouter:Router){}

  canActivate(): boolean {

    if(!this.userser.isLoggedin()){
      this.myRouter.navigateByUrl("/");
    }

    return this.userser.isLoggedin();
  }
  
}
