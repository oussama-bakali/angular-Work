import { Component, OnInit } from '@angular/core';
import { BookadderserviceService } from '../bookadderservice.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-premiumpage',
  templateUrl: './premiumpage.component.html',
  styleUrls: ['./premiumpage.component.css']
})
export class PremiumpageComponent implements OnInit {
  constructor(private Bookadder:BookadderserviceService,private form:FormBuilder){}
  registerform:any=FormGroup
  premiumbooks:any
  ref:any

  ngOnInit(): void {
    this.getpremiumbooks()
    this.registerform=this.form.group({
      id:new FormControl('',Validators.required)
     })
  }
  getpremiumbooks(){
    this.Bookadder.getpremiumbooks().subscribe(data=>{
      this.premiumbooks=data
      console.log(data)
    })
  }
  addpremiumbook(id:any){
  
    this.Bookadder.addpremiumbook(this.registerform.get("id").value,id).subscribe(data=>{
      alert(data.messagesuccess)
    })
  }

}
