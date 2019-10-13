import {
  AfterViewInit, ChangeDetectorRef,
  Component,
  EventEmitter, HostListener,
  Input, OnChanges, OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {
  MatMenuTrigger, MatPaginator, MatPaginatorIntl, MatTableDataSource
} from '@angular/material';
import {MatSort} from '@angular/material/sort';
import {Data} from '@angular/router';
import {SelectionModel} from '@angular/cdk/collections';
import {TabService} from '../../../Services/tab.service';
import {FilemanagerService} from '../../../Services/filemanager.service';


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
  private   pageLength = 30;

  constructor(private tabService: TabService , private  fileservice: FilemanagerService , private ref: ChangeDetectorRef) {
  }

  @Output() refresh = new EventEmitter<{}>();
  @Input() listdata: Data[];
  @Input() loading: boolean;
  @Input() listdataLenght: number;
  @ViewChild(MatMenuTrigger, {static: true})
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  contextMenu: MatMenuTrigger;
  contextMenuPosition = {x: '0px', y: '0px'};
  displayedColumns: string[] = ['select', 'name', 'lastModified', 'birthtime', ];
  selection = new SelectionModel<Data>(true, []);
  paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), this.ref);
  dataSource ;

  onContextMenu(event: MouseEvent) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = {};
    this.contextMenu.openMenu();
  }

  ngOnInit() {

  }
  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource(this.listdata);
    this.dataSource.sort = this.sort;
    this.selection.clear();
  }

  browse(element, $event: MouseEvent) {
    $event.stopPropagation();
    if (element.isFile !== true) {
      this.refresh.emit({path: element.path, name: element.name});
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
  @HostListener('window:scroll', ['$event'])
  onscroll(event) {
    const elem = event.currentTarget;
    console.log(elem);
    if ((elem.innerHeight + elem.pageYOffset + 200) >= document.body.offsetHeight && this.pageLength <= this.listdataLenght) {
      this.pageLength += 30;
      this.paginator._changePageSize(this.listdataLenght);
    }
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll($event: Event) {
    console.log('scrolled', $event);
    console.log($event);
// In chrome and some browser scroll is given to body tag
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    const max = document.documentElement.scrollHeight;
// pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
    if (pos === max )   {
      // Do your action here
      console.log(pos);
    }
  }
}
