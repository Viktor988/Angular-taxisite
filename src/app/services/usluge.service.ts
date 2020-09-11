import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { paths } from '../paths';

@Injectable({
  providedIn: 'root'
})
export class UslugeService {

  constructor(private service:HttpClient) { }
  dohvatiUsluge(){
let usluge=this.service.get(paths.usluge);
return usluge;

  }
}
