import { Component, OnInit } from '@angular/core';
import decode from 'jwt-decode'
import { EtudiantserviceService } from '../etudiantservice.service';
@Component({
  selector: 'app-etudiantdashboard',
  templateUrl: './etudiantdashboard.component.html',
  styleUrls: ['./etudiantdashboard.component.css']
})
export class EtudiantdashboardComponent implements OnInit {
  tokenpayload:any
  token:any
  expectedrol:any
  informationsetudiant:any
  constructor(private et:EtudiantserviceService){}
  ngOnInit(): void {
    this.token=localStorage.getItem('token')
    this.tokenpayload=decode(this.token)
    this.et.getsingleetudiantinfo(this.tokenpayload.id).subscribe(data=>{
      console.log(data)
     this.informationsetudiant=data
    })
  }
  
 
  
}
