import { Component, OnInit } from '@angular/core';
import { MeniService } from '../services/meni.service';
import { Meni } from '../meni';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private service:MeniService) { }
  public menu:Meni[];
  ngOnInit() {
    this.service.dohvatiMeni().subscribe(
      (Response:Meni[] )=> {
        this.menu = Response;

      },
      error => {
        alert("An error has occured. Please contact support team. Error: " + error)
      }
    )
  }

}
