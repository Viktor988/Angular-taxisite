import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { paths } from '../paths';
@Injectable({
  providedIn: 'root'
})
export class KategorijeAutaService {

  constructor(private service:HttpClient) { }
  dohvatiKategorije(){
    let kategorije=this.service.get(paths.kategorije);
    return kategorije;
}}
