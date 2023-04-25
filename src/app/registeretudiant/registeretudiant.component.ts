import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EtudiantserviceService } from '../etudiantservice.service';


@Component({
  selector: 'app-registeretudiant',
  templateUrl: './registeretudiant.component.html',
  styleUrls: ['./registeretudiant.component.css']
})
export class RegisteretudiantComponent implements OnInit {

  constructor(private etudiantservice:EtudiantserviceService,private form:FormBuilder) { }

registerform:any=FormGroup
message:any
  ngOnInit(): void {
    this.registerform=this.form.group({
      idutilisateur:new FormControl('',Validators.required),
      nom:new FormControl('',Validators.required),
      prenom:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required)

    })
  }
  registeretudiant(){
    console.log(this.registerform.value)
this.etudiantservice.registeretudiant(this.registerform.value).subscribe(data=>{
  console.log("user created")
  if (data){
    this.message=data.message
  }
 console.log(data)
  
 // alert("registersuccessful")
},(err: { error: { message: any; }; })=>{console.log(err)
  this.message=err.error.message
})
  }

}