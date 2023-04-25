import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import decode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class EtudiantguardGuard implements CanActivate {
  tokenpayload:any
  token:any
  expectedrol:any
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      this.expectedrol=route.data['expectedrole']
      this.token=localStorage.getItem('token')
    this.tokenpayload=decode(this.token)
   
    if (this.tokenpayload.role==this.expectedrol[0]||this.tokenpayload.role==this.expectedrol[1]){
      return true;
    }
    if (this.tokenpayload.role=="SUSPENDU"){
      alert("you are banned")
      
      return false
          }
          if (this.tokenpayload.role!=this.expectedrol){
            alert("wait for admin activation")
            
            return false
                }
    return true;
  }
  
}
