import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {Data} from '../filelist/filelist.component';
import { MatSort, } from '@angular/material';

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
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  sortedData: Data[];
  panelOpenState: boolean;


  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.sortedData = this.listData;
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

  applyFilter($event) {
    if ($event.target.value === '') {
      this.sortedData = this.listData;
    } else {
      const s = $event.target.value.toLowerCase().trim();
      this.sortedData = [];
      this.listData.forEach(data => {
        const name = data.name.toLowerCase().trim()
        if (name.includes(s)) {
          this.sortedData.push(data);
        }
      });
    }
  }
}
