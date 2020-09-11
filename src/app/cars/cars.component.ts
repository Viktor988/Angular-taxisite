import { AutaService } from './../services/auta.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor(private service:AutaService) { }

  public auta;
  ngOnInit() {
    this.service.dohvatiAuta().subscribe(
      Response=> {
        this.auta = Response;
      
      },
      error => {
        alert("An error has occured. Please contact support team. Error: " + error)
      }
    )
  }

}
