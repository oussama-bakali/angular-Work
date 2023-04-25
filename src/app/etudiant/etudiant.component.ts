import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EtudiantserviceService } from '../etudiantservice.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit{
  constructor(private EtudiantService:EtudiantserviceService){}
  
  message:any="wrong or used key"
  success:any="key is available"
  error=true
  succss=true
  form:any=new FormGroup({
    
    cle:new FormControl('',Validators.required)
    
    })
    ngOnInit(): void {
        
    }
    verifycle(){
      console.log(this.form.get("cle").value)
      this.EtudiantService.verifycle(this.form.get("cle")).subscribe(data=>{
        
this.error=false
//alert(data.message)
      },(err)=>{
//alert(err.error.message)
this.succss=false
      })
    }
    
}
