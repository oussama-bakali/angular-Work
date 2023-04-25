import { Component, OnInit } from '@angular/core';
import { AdministratorService } from '../administrator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindetails',
  templateUrl: './admindetails.component.html',
  styleUrls: ['./admindetails.component.css']
})
export class AdmindetailsComponent implements OnInit {
  details:any;
constructor(private admin:AdministratorService,private route:Router){}
ngOnInit(): void {
    this.getdetails()
}
getdetails(){
  this.admin.getdetails().subscribe(data=>{
    this.details=data
    console.log(data)
  })
}
disconnect(){
 
  localStorage.removeItem('token');
  this.route.navigate(['/','loginadmin'])
}
}
