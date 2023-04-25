import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdministratorService } from '../administrator.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  constructor(private admin:AdministratorService,private route:Router){}
form:any=new FormGroup({
id:new FormControl('',Validators.required),
password:new FormControl('',Validators.required)

})
login(data:any){
  this.admin.login(data).subscribe(data=>{
    localStorage.setItem('token',data.token)
    this.route.navigate(['/','admin']);
    
  },(err)=>{
    alert(err.error.message)
  })
}
}
