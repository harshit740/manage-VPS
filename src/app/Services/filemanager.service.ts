import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilemanagerService {

  constructor(private http: HttpClient) { }

  listData(options) {
    return this.http.post('http://localhost:3000/filemanager/', options);
  }
}
