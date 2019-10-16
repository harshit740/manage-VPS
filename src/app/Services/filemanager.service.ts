import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilemanagerService {

  constructor(private http: HttpClient) { }

  listdata(options) {
    return this.http.post('https://manage.thegeekflux.in/filemanager/', options);
  }
}
