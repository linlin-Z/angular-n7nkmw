import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajoute',
  templateUrl: './ajoute.component.html',
  styleUrls: ['./ajoute.component.css'],
    template: `
    <input #newSite
      (keyup.enter)="addSite(newSite.value)"
      (blur)="addSite(newSite.value); newSite.value='' ">
      <button (click)=addSite(newSite.value)>Add</button>
    <ul><li *ngFor="let site of sites">{{site}}</li></ul>
    <button (click)="clicklike()">like!</button>
    {{compteurlike}}
    <button (click)="clickunlike()">unlike!</button>
    {{compteurunlike}}
  `
})
export class AjouteComponent implements OnInit {
compteurlike=0;
compteurunlike=0;
   sites = [ 'Google', 'Taobao', 'Facebook'];
  addSite(newSite: string) {
    if (newSite) {
      this.sites.push(newSite);
    }
  }
  clicklike(){
    this.compteurlike++;
  }
  clickunlike(){
    this.compteurunlike++;
  }

}