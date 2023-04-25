import { Component, OnInit, ViewChild } from '@angular/core';
import { AdministratorService } from '../administrator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etudiantspage',
  templateUrl: './etudiantspage.component.html',
  styleUrls: ['./etudiantspage.component.css']
})

export class EtudiantspageComponent implements OnInit{
  etudiants:any;
  value :any;
  
constructor(private admin:AdministratorService,private route:Router){}
ngOnInit(): void {
    this.getetudiants()
}
getetudiants(){
this.admin.getetudiants().subscribe(data=>{
this.etudiants=data
})
}
onchange(selectedval:string){
  console.log(selectedval)
}
modifyrole(id:any,role:any){
  this.admin.modifyrole(id,role).subscribe(data=>{
    if (data){
      alert(data.message)
    }
  })
}
getetudiantsbyrole(key:any){
  this.admin.filteretudiantsbyrole(key).subscribe(data=>{
    this.etudiants=data
  })
}
disconnect(){
 
  localStorage.removeItem('token');
  this.route.navigate(['/','loginadmin'])
}

}
