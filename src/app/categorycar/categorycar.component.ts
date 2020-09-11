import { Component, OnInit } from '@angular/core';
import { AutaService } from '../services/auta.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-categorycar',
  templateUrl: './categorycar.component.html',
  styleUrls: ['./categorycar.component.css']
})
export class CategorycarComponent implements OnInit {
  idkat
  auta
  kategorisanaAuta=[];
  
  constructor(private service:AutaService,private http: HttpClient, private ruta: ActivatedRoute) {
    this.ruta.params.subscribe((params : Params) => {
      this.idkat = +this.ruta.snapshot.params["id"]
    })


   }

   ngOnInit() {
    this.service.dohvatiAuta().subscribe(
      Response => {
        this.auta = Response;
        for(let i=0; i<this.auta.length; i++){
          if(this.auta[i].idKat == this.idkat){
            this.kategorisanaAuta.push(this.auta[i])
           
          
          }
        }
        return this.kategorisanaAuta;
      },
      error => {
        alert("An error has occured. Please contact support team. Error: " + error)
      }
    )
  }

}
