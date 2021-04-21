import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../../Models/client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  url = 'http://localhost:4000/';
  private headers: HttpHeaders;

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(this.url + 'clients');
  }

  findById(id: string): Observable<any> {
    return this.http.get(this.url + 'client/' + id);
  }

  save(client: Client) {
    // this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    return this.http.post(this.url + 'client', client/*, {headers: this.headers}*/);
  }

  update(client: Client) {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    return this.http.put(this.url + 'client', client, {headers: this.headers});
  }

  delete(id: string): Observable<any> {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    return this.http.delete(this.url + 'client/' + id, {headers: this.headers});
  }
}
