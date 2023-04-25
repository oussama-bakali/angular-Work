import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administratorpage',
  templateUrl: './administratorpage.component.html',
  styleUrls: ['./administratorpage.component.css']
})
export class AdministratorpageComponent {
  constructor(private route:Router){}


  disconnect(){
 
    localStorage.removeItem('token');
    this.route.navigate(['/','loginadmin'])
  }
}
