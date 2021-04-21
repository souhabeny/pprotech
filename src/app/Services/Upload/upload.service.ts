import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  url = 'http://localhost:4000/';
  private headers: HttpHeaders;

  constructor(private httpClient: HttpClient) {
  }

  upload(file: FormData) {
    // this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    return this.httpClient.post(this.url + 'upload', file/*, {headers: this.headers}*/);
  }
}
