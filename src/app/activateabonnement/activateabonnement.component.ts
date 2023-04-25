import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EtudiantserviceService } from '../etudiantservice.service';

@Component({
  selector: 'app-activateabonnement',
  templateUrl: './activateabonnement.component.html',
  styleUrls: ['./activateabonnement.component.css']
})
export class ActivateabonnementComponent {
  message:any;
  erreur:any;
  constructor(private etudiant:EtudiantserviceService){}
  form:any=new FormGroup({
    
    cle:new FormControl('',Validators.required),
    id:new FormControl('',Validators.required)
    })
    activateabonnement(data:any){
      this.etudiant.activateabonnement(data.value).subscribe(data=>{
       
        this.message=data.message
      },(err)=>{
        this.erreur=err.error.message
      })
    }
}
