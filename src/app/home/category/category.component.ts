import { Component, OnInit } from '@angular/core';
import { KategorijeAutaService } from 'src/app/services/kategorije-auta.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],

})
export class CategoryComponent implements OnInit {

  constructor(private service:KategorijeAutaService) { }

  change=false;
  public kategorije;
  ngOnInit() {
    this.service.dohvatiKategorije().subscribe(
      Response=> {
        this.kategorije = Response;

      },
      error => {
        alert("An error has occured. Please contact support team. Error: " + error)
      }
    )
  }


}
