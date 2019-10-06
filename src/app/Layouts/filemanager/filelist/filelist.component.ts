import {
  AfterViewInit,
  Component,
  ContentChild,
  EventEmitter,
  Input, OnChanges,
  OnInit,
  Output,
  QueryList,
  ViewChild
} from '@angular/core';
import {MatColumnDef, MatHeaderRowDef, MatMenuTrigger, MatPaginator, MatRowDef, MatTable, MatTableDataSource} from '@angular/material';
import {MatSort} from '@angular/material/sort';
import {$e} from 'codelyzer/angular/styles/chars';

export interface Data {
  name: string;
  path: string;
  isFile: string;
  ext: string;
  lastModified: number;
  birthtime: number;
}

@Component({
  selector: 'app-filelist',
  templateUrl: './filelist.component.html',
  styleUrls: ['./filelist.component.css']
})

export class FilelistComponent implements OnInit   {

  constructor() {
  }

  @Output() refresh = new EventEmitter<string>();
  @Input('listdata') listdata: Data[];
  @ViewChild(MatMenuTrigger, {static: true})
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  contextMenu: MatMenuTrigger;
  contextMenuPosition = {x: '0px', y: '0px'};
  displayedColumns: string[] = ['name', 'lastModified', 'birthtime', ];


  onContextMenu(event: MouseEvent) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = {};
    this.contextMenu.openMenu();
  }

  ngOnInit() {
  }


  browse(path) {
    this.refresh.emit(path);
  }

  sortData($event) {
    console.log($event);
  }

  applyFilter($event) {
    console.log(this.listdata);
    this.listdata = this.listdata.filter($event.target.value.trim().toLowerCase());
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
