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
  `
})
export class AjouteComponent implements OnInit {

   sites = [ 'Google', 'Taobao', 'Facebook'];
  addSite(newSite: string) {
    if (newSite) {
      this.sites.push(newSite);
    }
  }

}