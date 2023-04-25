import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginetudiantComponent } from './loginetudiant/loginetudiant.component';
import { RegisteretudiantComponent } from './registeretudiant/registeretudiant.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { HeaderComponent } from './header/header.component';
import { LoginchoicesComponent } from './loginchoices/loginchoices.component';
import { RegisterchoicesComponent } from './registerchoices/registerchoices.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { AdministratorpageComponent } from './administratorpage/administratorpage.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { EtudiantspageComponent } from './etudiantspage/etudiantspage.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { KeysComponent } from './keys/keys.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartComponent } from './chart/chart.component';
import { EtudiantdashboardComponent } from './etudiantdashboard/etudiantdashboard.component';
import { EtudiantdetailsComponent } from './etudiantdetails/etudiantdetails.component';
import { AdmindetailsComponent } from './admindetails/admindetails.component';
import { ActivateabonnementComponent } from './activateabonnement/activateabonnement.component';
import { BooksComponent } from './books/books.component';
import { BookadderComponent } from './bookadder/bookadder.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PremiumpageComponent } from './premiumpage/premiumpage.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginetudiantComponent,
    RegisteretudiantComponent,
    EtudiantComponent,
    FirstpageComponent,
    HeaderComponent,
    LoginchoicesComponent,
    RegisterchoicesComponent,
    AdministratorpageComponent,
    EtudiantspageComponent,
    KeysComponent,
    AdminloginComponent,
    ChartComponent,
    EtudiantdashboardComponent,
    EtudiantdetailsComponent,
    AdmindetailsComponent,
    ActivateabonnementComponent,
    BooksComponent,
    BookadderComponent,
    PremiumpageComponent
  ],
  imports: [
    ToastrModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,FormsModule,ReactiveFormsModule,MatCardModule,MatButtonModule,HttpClientModule,MatDialogModule,MatIconModule,MatSidenavModule,MatToolbarModule,MatListModule,MatMenuModule,HighchartsChartModule ,MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
