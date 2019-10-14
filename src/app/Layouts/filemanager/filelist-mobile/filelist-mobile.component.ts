import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {Data} from '../filelist/filelist.component';
import {MatMenuTrigger, MatSort,} from '@angular/material';

@Component({
  selector: 'app-filelist-mobile',
  templateUrl: './filelist-mobile.component.html',
  styleUrls: ['./filelist-mobile.component.css']
})
export class FilelistMobileComponent implements OnInit , OnChanges {

  constructor() {
  }

  @Input() listData: Data[];
  @Input() loading: boolean;
  @Output() refresh = new EventEmitter<{}>();
  @Output() openInNewTab = new  EventEmitter<{}>();
  @ViewChild(MatMenuTrigger, {static: true})
  contextMenu: MatMenuTrigger;
  contextMenuPosition = {x: '0px', y: '0px'};
  sortedData: Data[];
  panelOpenState: boolean;


  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.sortedData = this.listData;
  }

  onContextMenu(event: MouseEvent, element: any) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = {item: element};
    this.contextMenu.openMenu();
  }

  browse(element, $event: MouseEvent) {
    $event.stopPropagation();
    if (element.isFile !== true) {
      this.refresh.emit({path: element.path, name: element.name});
    }
  }

  trackByName(index, item) {
    return item.name;
  }
  newTab(item) {
    this.openInNewTab.emit(item);
  }
  applyFilter($event) {
    if ($event.target.value === '') {
      this.sortedData = this.listData;
    } else {
      const s = $event.target.value.toLowerCase().trim();
     // this.sortedData = [];
      this.sortedData =  this.listData.filter(obj => {
        return obj.name.toLowerCase().trim().indexOf(s) !== -1;
      });
     /* this.listData.forEach(data => {
        const name = data.name.toLowerCase().trim();
        if (name.includes(s)) {
          this.sortedData.push(data);
        }
      }); */
    }
  }
}
