import { Component, OnInit } from '@angular/core';
import {FilemanagerService} from '../../Services/filemanager.service';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css']
})
export class FileManagerComponent implements OnInit {

  constructor(private fileservice: FilemanagerService) { }
  data;
  basePath = '/home/harshit';
  currentpath = this.basePath;
  previousPathQueue = [this.basePath];
  previousPath = this.basePath;
  isHidden  = false;


  ngOnInit() {
    let isHidden;
    this.getFileList(this.basePath, isHidden = false);
  }
async  getFileList(path, isHidden) {
    const options = {path, isHidden};
    this.currentpath = path;
    console.log(this.previousPathQueue);
    this.data = await this.fileservice.listdata(options);
  }

  onShowHidden($event) {
    console.log($event);
    this.isHidden = $event.isHidden;
    this.getFileList(this.currentpath, $event.isHidden, );
  }

  onRefresh($event) {
    this.previousPathQueue.push(this.currentpath);
    this.getFileList($event, this.isHidden);
  }

  isBackenabled() {
    return this.basePath === this.currentpath;
  }

  onGoback() {
     const path = this.previousPathQueue.pop();
     this.getFileList(path, this.isHidden);
    }

}
