import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookadderserviceService } from '../bookadderservice.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:any

ref:any


constructor(private http:HttpClient,private bookadder:BookadderserviceService,private form:FormBuilder){}
registerform:any=FormGroup
addbooknormal(id:any){
  
  this.bookadder.addbooknormal(this.registerform.get("id").value,id).subscribe(data=>{
    alert(data.messagesuccess)
  })
}
  ngOnInit(): void {
    this.getbooks()
    this.registerform=this.form.group({
     id:new FormControl('',Validators.required)
    })
  
  
  }
getbooks(){
  this.bookadder.getallbooks().subscribe(data=>{
    this.books=data
    console.log(data)
  })
}

}
