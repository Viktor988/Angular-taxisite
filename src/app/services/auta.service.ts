import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { paths } from '../paths';

@Injectable({
  providedIn: 'root'
})
export class AutaService {

  constructor(private service:HttpClient) { }
dohvatiAuta(){
  let auta=this.service.get(paths.auta);
    return auta;
}


}
