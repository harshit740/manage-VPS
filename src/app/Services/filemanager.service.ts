import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilemanagerService {

  constructor(private http: HttpClient) { }

  listdata(options) {
    return this.http.post('http://flux.eastus.cloudapp.azure.com:8000/filemanager/', options);
  }
}
