import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisteretudiantComponent } from './registeretudiant/registeretudiant.component';
import { LoginetudiantComponent } from './loginetudiant/loginetudiant.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { AdministratorpageComponent } from './administratorpage/administratorpage.component';
import { EtudiantspageComponent } from './etudiantspage/etudiantspage.component';
import { KeysComponent } from './keys/keys.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindetailsComponent } from './admindetails/admindetails.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ActivateabonnementComponent } from './activateabonnement/activateabonnement.component';
import { BooksComponent } from './books/books.component';
import { BookadderComponent } from './bookadder/bookadder.component';
import { PremiumpageComponent } from './premiumpage/premiumpage.component';
import { AuthguardGuard } from './authguard.guard';
import { EtudiantguardGuard } from './etudiantguard.guard';
import { AdministratorguardGuard } from './administratorguard.guard';
import { EtudiantdashboardComponent } from './etudiantdashboard/etudiantdashboard.component';

export const routes: Routes = [{path:"registeretudiant",component:RegisteretudiantComponent},{path:"loginetudiant",component:LoginetudiantComponent},{path:"main",component:FirstpageComponent},{path:"admin",component:AdministratorpageComponent,data:{expectedrole:'xdea_okle_deal'},canActivate:[AdministratorguardGuard]},{path:"etudiants",component:EtudiantspageComponent,data:{expectedrole:'xdea_okle_deal'},canActivate:[AdministratorguardGuard]},{path:"cles",component:KeysComponent},{path:"loginadmin",component:AdminloginComponent},
{path:"admindetails",component:AdmindetailsComponent,data:{expectedrole:'xdea_okle_deal'},canActivate:[AdministratorguardGuard]},{path:"espaceetudiant",component:EtudiantComponent,data:{expectedrole:['REGISTRED','PREMIUM']},canActivate:[EtudiantguardGuard]},{path:"activateabonnement",component:ActivateabonnementComponent,data:{expectedrole:['REGISTRED','PREMIUM']}},{path:"books",component:BooksComponent},{path:"bookadder",component:BookadderComponent},{path:"premiumpage",component:PremiumpageComponent,canActivate:[AuthguardGuard],data:{expectedrole:'PREMIUM'}},{path:"etudiantinfo",component:EtudiantdashboardComponent,data:{expectedrole:['PREMIUM','REGISTRED']},canActivate:[EtudiantguardGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
