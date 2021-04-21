import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Categorie} from "../../Models/categorie";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  url = 'http://localhost:4000/';
  private headers: HttpHeaders;

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(this.url + 'categories');
  }

  findById(id: string): Observable<any> {
    return this.http.get(this.url + 'categorie/' + id);
  }

  save(categorie: Categorie) {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    return this.http.post(this.url + 'categorie', categorie, {headers: this.headers});
  }

  update(categorie: Categorie) {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    return this.http.put(this.url + 'categorie', categorie, {headers: this.headers});
  }

  delete(id: string): Observable<any> {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    return this.http.delete(this.url + 'categorie/' + id, {headers: this.headers});
  }
}
