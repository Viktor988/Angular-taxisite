import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations:[
    trigger("rotateY", [
      state('false', style({transform: 'rotateY(0deg)'})),
      state('true', style({transform: 'rotateY(180deg)'})),

      transition('false<=>true', animate('1000ms ease'))

    ])
  ]




})
export class HeaderComponent implements OnInit {
public time;
public datum
rotate=false;
  constructor() {}

  ngOnInit() {

    this.datum=new Date()
    this.time = setInterval(() =>  this.datum=new Date(),30000);



  }

  rotate180(){
  this.rotate=true;
}
totate0(){
  this.rotate=false;
}

}
