import { paths } from './../paths';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeniService {

  constructor(private service:HttpClient) { }
  dohvatiMeni(){
let meni=this.service.get(paths.meni);
return meni;

  }
}
