import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-connecter',
  templateUrl: './connecter.component.html',
  styleUrls: ['./connecter.component.css']
})
export class ConnecterComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({  // Crée une instance de FormGroup
      username: ['linlin']                 // Crée une instance de FormControl
  
    });
  }

  login() {
    console.log('Données du formulaire...', this.loginForm.value);
     console.log(this.loginForm.value);
  }
}
