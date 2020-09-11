import { Component, OnInit } from '@angular/core';
import { KategorijeAutaService } from '../services/kategorije-auta.service';
import { FormGroup, FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger("rotate", [
      state('false', style({transform: 'rotateY(0deg)'})),
      state('true', style({transform: 'rotateY(180deg)'})),

      transition('false<=>true', animate('1000ms ease'))

    ]),
    trigger("ring", [
      state('false', style({transform: 'rotate(0deg)'})),
      state('true', style({transform: 'rotate(45deg)'})),

      transition('false<=>true', animate('500ms ease'))

    ]),

  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  iconRotate=false;
  ringrotate=false;

  ngOnInit() {

   setInterval(() =>  this.iconRotate=true,1500);
   setInterval(() =>  this.iconRotate=false,3000);

   setInterval(() =>  this.ringrotate=true,500);
   setInterval(() =>  this.ringrotate=false,1000);
  }

  }


