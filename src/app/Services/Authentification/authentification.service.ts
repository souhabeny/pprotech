import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Login} from "../../Models/login";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  url = 'http://localhost:4000/';

  constructor(private http: HttpClient) { }

  login(login: Login) {
    return this.http.post(this.url + 'login', login);
  }

  loginAdmin(login: Login) {
    return this.http.post(this.url + 'loginadmin', login);
  }

  singOut() {
    localStorage.clear();
  }

  getToken() {
    return   localStorage.getItem('token');
  }

}
