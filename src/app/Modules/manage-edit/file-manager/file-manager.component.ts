import {Component, HostListener, OnInit} from '@angular/core';
import {FilemanagerService} from '../../../Services/filemanager.service';
import {TabService} from '../../../Services/tab.service';
import {MatTabChangeEvent} from '@angular/material';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css']
})
export class FileManagerComponent implements OnInit {

  selectedIndex = 0;
  tabs;
  loading: boolean;
  showTable: boolean;
  private isHidden: boolean;

  constructor(private fileservice: FilemanagerService, private tabService: TabService) {
  }

  ngOnInit() {
    this.showTable =   window.innerWidth > 800;
    let isHidden;
    this.tabs = this.tabService.TabBehaviourSubject;
    this.getFileList(this.tabs.getValue()[this.selectedIndex].basePath, isHidden = false);
  }

  async getFileList(path, isHidden) {
    this.loading = true;
    const options = {path, isHidden};
    this.tabs.getValue()[this.selectedIndex].currentPath = path;
    this.tabs.getValue()[this.selectedIndex].title =  path;
    this.fileservice.listdata(options).subscribe(res => {
        this.tabs.getValue()[this.selectedIndex].data = res;
        this.loading = false;
      }
    );
  }

  onShowHidden($event) {
    this.tabs.getValue()[this.selectedIndex].isHidden = $event.isHidden;
    this.getFileList(this.tabs.getValue()[this.selectedIndex].currentPath, $event.isHidden, );
  }

  onRefresh($event) {
    this.tabs.getValue()[this.selectedIndex].previousPathQueue.push(this.tabs.getValue()[this.selectedIndex].currentPath);
    this.getFileList($event.path, this.tabs.getValue()[this.selectedIndex].isHidden);
  }

  isBackenabled() {
    return this.tabs.getValue()[this.selectedIndex].basePath === this.tabs.getValue()[this.selectedIndex].currentPath;
  }

  onGoback() {
    const path = this.tabs.getValue()[this.selectedIndex].previousPathQueue.pop();
    this.getFileList(path, this.tabs.getValue()[this.selectedIndex].isHidden);
  }

  onTabChange($event: MatTabChangeEvent) {
    this.selectedIndex = $event.index;
    if (this.tabs.getValue()[$event.index].data.length === 0) {
      let isHidden;
      this.getFileList(this.tabs.getValue()[this.selectedIndex].basePath, isHidden = false);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll($event) {
    console.log($event);
  }
}
