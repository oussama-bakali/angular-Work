import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterchoicesComponent } from '../registerchoices/registerchoices.component';
import { LoginchoicesComponent } from '../loginchoices/loginchoices.component';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent {
constructor(private mat:MatDialog ){}
openregisterchoices():void{
  this.mat.open(RegisterchoicesComponent,{width:'350px',height:'50px'})
}
openloginchoices():void{
  this.mat.open(LoginchoicesComponent,{width:'350px',height:'50px'})
}
}
