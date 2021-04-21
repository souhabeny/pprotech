import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {SousCategorie} from "../../Models/sousCategorie";

@Injectable({
  providedIn: 'root'
})
export class SousCategorieService {
  url = 'http://localhost:4000/';
  private headers: HttpHeaders;

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(this.url + 'souscategories');
  }

  findById(id: string): Observable<any> {
    return this.http.get(this.url + 'souscategorie/' + id);
  }

  findByCategorie(id: string): Observable<any> {
    return this.http.get(this.url + 'souscategorie/categorie/' + id);
  }

  save(sousCategorie: SousCategorie) {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    return this.http.post(this.url + 'souscategorie', sousCategorie, {headers: this.headers});
  }

  update(sousCategorie: SousCategorie) {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    return this.http.put(this.url + 'souscategorie', sousCategorie, {headers: this.headers});
  }

  delete(id: string): Observable<any> {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    return this.http.delete(this.url + 'souscategorie/' + id, {headers: this.headers});
  }

  findByName(sousCateg: string): Observable<any> {
    return this.http.get(this.url + 'souscategorie/name/' + sousCateg);
  }
}
