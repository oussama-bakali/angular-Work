import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import decode from 'jwt-decode'
@Injectable({
  providedIn: 'root'
})
export class AdministratorguardGuard implements CanActivate {
  tokenpayload:any
  token:any
  expectedrol:any
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    this.expectedrol=route.data['expectedrole']
    this.token=localStorage.getItem('token')
  this.tokenpayload=decode(this.token)
  if (this.tokenpayload.role!=this.expectedrol){
    alert("you dont have autorizations to access to this page")
return false;
  }
  return true;
  }
  
}
