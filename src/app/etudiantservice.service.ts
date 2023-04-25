import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etudiant } from './etudiant';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class EtudiantserviceService {
url="http://localhost:8050"
constructor(private http:HttpClient) { }
registeretudiant(data:Etudiant){
return this.http.post<any>(this.url+"/registeretudiant",data,{headers:new HttpHeaders({'Content-Type': 'application/json'})})
}
loginetudiant(data:Etudiant){
  return this.http.post<any>(this.url+"/loginetudiant",data,{headers:new HttpHeaders({'Content-Type': 'application/json'})})
}
verifycle(data:any){
  return this.http.get<any>(this.url+"/verifycle"+"/"+data.value)
}
activateabonnement(data:any){
  return this.http.post<any>(this.url+"/activateabonnement",data,{headers:new HttpHeaders({'Content-Type': 'application/json'})})
}
getsingleetudiantinfo( id:any){
  return this.http.get<any>(this.url+"/etudiant/"+id)
}

}
