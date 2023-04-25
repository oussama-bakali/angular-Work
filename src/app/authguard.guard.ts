import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  tokenpayload:any
  token:any
  expectedrol:any
  canActivate(
    route: ActivatedRouteSnapshot
    ):  boolean  {
this.expectedrol=route.data['expectedrole']
      this.token=localStorage.getItem('token')
    this.tokenpayload=decode(this.token)
    if (this.tokenpayload.role!==this.expectedrol){
alert("you are not authorized")

return false
    }
    return true;
  }
  
}
