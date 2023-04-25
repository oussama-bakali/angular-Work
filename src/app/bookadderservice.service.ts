import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookadderserviceService {

  constructor(private http:HttpClient) { }
  url="http://localhost:8050"
  addbook(data:any){
    return this.http.post<any>(this.url+"/addbook",data,{headers:new HttpHeaders({'Content-Type': 'application/json'})})
  }
  getallbooks(){
    return this.http.get<any>(this.url+"/books")
  }
  addbooknormal(id:any,reference:any){
    const data={id:id,reference:reference}
return this.http.post<any>(this.url+"/"+id+"/"+reference+"/buynormalbook",data,{headers:new HttpHeaders({'Content-Type': 'application/json'})})
  }
  addpremiumbook(id:any,reference:any){
    const data={id:id,reference:reference}
    return this.http.post<any>(this.url+"/"+id+"/"+reference+"/buypremiumbook",data,{headers:new HttpHeaders({'Content-Type': 'application/json'})})
  }
  getpremiumbooks(){
    return this.http.get<any>(this.url+"/premiumBooks")
  }
}
