import { Component, OnInit } from '@angular/core';
import { EtudiantserviceService } from '../etudiantservice.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginetudiant',
  templateUrl: './loginetudiant.component.html',
  styleUrls: ['./loginetudiant.component.css']
})
export class LoginetudiantComponent implements OnInit {
  
  constructor(private etudiantservice:EtudiantserviceService,private form:FormBuilder,private router:Router) { }
loginform:any=FormGroup
success:boolean=false;
  ngOnInit(): void {
    this.loginform=this.form.group({
      idutilisateur:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
    })
  }
  loginetudiant(){
    this.etudiantservice.loginetudiant(this.loginform.value).subscribe(data=>{

      if (data){
        localStorage.setItem("token",data.token)
       this.success=true;
       // alert(data.message)
        this.router.navigate(['/','espaceetudiant'])
      }
    },(err)=>{
      alert(err.error.message)
    })
  }

}