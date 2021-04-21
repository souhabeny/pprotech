import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produit} from "../../Models/produit";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  url = 'http://localhost:4000/';
  private headers: HttpHeaders;

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(this.url + 'produits');
  }

  findById(id: string): Observable<any> {
    return this.http.get(this.url + 'produit/' + id);
  }

  save(produit: Produit) {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    return this.http.post(this.url + 'produit', produit, {headers: this.headers});
  }

  update(produit: Produit) {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    return this.http.put(this.url + 'produit', produit, {headers: this.headers});
  }

  delete(id: string): Observable<any> {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    return this.http.delete(this.url + 'produit/' + id, {headers: this.headers});
  }

  findBySousCateg(sousCateg: string): Observable<any> {
        return this.http.get(this.url + 'produit/souscateg/' + sousCateg);
  }
}
