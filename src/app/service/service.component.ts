import { Component, OnInit } from '@angular/core';
import { UslugeService } from '../services/usluge.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(private service:UslugeService) { }
  test:boolean=false;
  public usluge;
  ngOnInit() {
    this.service.dohvatiUsluge().subscribe(
      Response=> {
        this.usluge = Response;

      },
      error => {
        alert("An error has occured. Please contact support team. Error: " + error)
      }
    )

  }
  // ide(){
  //   this.test=!this.test;
  // }

}
