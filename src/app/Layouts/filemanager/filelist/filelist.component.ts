import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input, OnChanges, OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {
  MatMenuTrigger, MatTableDataSource
} from '@angular/material';
import {MatSort} from '@angular/material/sort';
import {Data} from '@angular/router';
import {SelectionModel} from '@angular/cdk/collections';


export interface Data {
  name: string;
  path: string;
  isFile: boolean;
  ext: string;
  lastModified: number;
  birthtime: number;
}

@Component({
  selector: 'app-filelist',
  templateUrl: './filelist.component.html',
  styleUrls: ['./filelist.component.css']
})

export class FilelistComponent implements OnInit  ,  OnChanges    {

  constructor() {
  }

  @Output() refresh = new EventEmitter<string>();
  @Input('listdata') listdata: Data[];
  @ViewChild(MatMenuTrigger, {static: true})
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  contextMenu: MatMenuTrigger;
  contextMenuPosition = {x: '0px', y: '0px'};
  displayedColumns: string[] = ['select', 'name', 'lastModified', 'birthtime', ];
  dataSource = new MatTableDataSource(this.listdata);
  selection = new SelectionModel<Data>(true, []);

  onContextMenu(event: MouseEvent) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = {};
    this.contextMenu.openMenu();
  }

  ngOnInit() {
    console.log(this.selection.selected);
  }
  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource(this.listdata);
    this.dataSource.sort = this.sort;
    this.selection.clear();
  }

  browse(element, $event: MouseEvent) {
    $event.stopPropagation();
    if (element.isFile !== true) {
      this.refresh.emit(element.path);
    }
  }


  applyFilter($event) {
    this.dataSource.filter = $event.target.value.trim().toLowerCase() ;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Data): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  deleteSelected() {
    console.log(this.selection.selected);
  }
}
