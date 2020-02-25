import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ConnecterComponent } from './connecter/connecter.component';
import { CommonModule } from '@angular/common';
import { RechercheComponent } from './connecter/recherche/recherche.component';
import { AjouteComponent } from './connecter/ajoute/ajoute.component';

import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path: 'connecter',
 component:ConnecterComponent},
  {path: 'recherche',
 component:RechercheComponent},
  {path: 'ajoute',
 component:AjouteComponent},
  {
   path: '',
   redirectTo: 'connecter',
   pathMatch: "full"
 }

];


@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],ReactiveFormsModule,
  declarations: [ AppComponent, ConnecterComponent, RechercheComponent, AjouteComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
