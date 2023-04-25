import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import decode from 'jwt-decode'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  token:any
  tokenpayload:any
  visible:any=false
  expectedrol:any
  constructor(private route:Router){}
  ngOnInit(): void {
    this.token=localStorage.getItem('token')
    this.tokenpayload=decode(this.token)
    if (this.tokenpayload.role=="PREMIUM"||this.tokenpayload.role=="xdea_okle_deal"){
      this.visible=true
    }
  }


disconnect(){
 
  localStorage.removeItem('token');
  this.route.navigate(['/','loginetudiant'])
}
}
