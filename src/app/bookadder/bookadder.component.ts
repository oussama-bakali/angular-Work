import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookadderserviceService } from '../bookadderservice.service';

@Component({
  selector: 'app-bookadder',
  templateUrl: './bookadder.component.html',
  styleUrls: ['./bookadder.component.css']
})
export class BookadderComponent implements OnInit {
  constructor(private bookadder:BookadderserviceService,private form:FormBuilder){}
  registerform:any=FormGroup
  ngOnInit(): void {
    this.registerform=this.form.group({
      reference:new FormControl('',Validators.required),
      auteur:new FormControl('',Validators.required),
      codeabar:new FormControl('',Validators.required),
      nbpages:new FormControl('',Validators.required),
      fichlivre:new FormControl('',Validators.required),
      imagelivre:new FormControl('',Validators.required),
      premium:new FormControl('',Validators.required)

    })
    
    
  }
  addbook(data:any){
     this.bookadder.addbook(data).subscribe(data=>{
      alert(data.message)
     })
  }
  
}
