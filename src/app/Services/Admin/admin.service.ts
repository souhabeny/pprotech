import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Admin} from "../../Models/admin";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url = 'http://localhost:4000/';
  private headers: HttpHeaders;

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(this.url + 'admins');
  }

  findById(id: string): Observable<any> {
    return this.http.get(this.url + 'admin/' + id);
  }

  save(admin: Admin) {
    // this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    return this.http.post(this.url + 'admin', admin/*, {headers: this.headers}*/);
  }

  update(admin: Admin) {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    return this.http.put(this.url + 'admin', admin, {headers: this.headers});
  }

  delete(id: string): Observable<any> {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    return this.http.delete(this.url + 'admin/' + id, {headers: this.headers});
  }
}
