import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etudiant } from './etudiant';


@Injectable({
  providedIn: 'root'
})
export class AdministratorService {
  url="http://localhost:8050"
  constructor(private http:HttpClient) { }
getetudiants(){
  return this.http.get <Etudiant>(this.url+"/gestionneur/Etudiants")
}
modifyrole(id:any,role:any){
  return this.http.put<any>(this.url+"/"+id+"/"+role,role)
}
getscles(){
  return this.http.get<any>(this.url+"/cles");
}
login(data:any){
  return this.http.post<any>(this.url+"/loginadmin",data)
}
getdetails(){
  return this.http.get<any>(this.url+"/admin")
}
filteretudiantsbyrole(key:any){
  return this.http.get<any>(this.url+"/etudiants/"+key)
}

}
