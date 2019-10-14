import {Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogBoxComponent} from './dialog-box/dialog-box.component';
import {TabService} from '../../../../Services/tab.service';
import {$e} from 'codelyzer/angular/styles/chars';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {
  constructor(public dialog: MatDialog, private tabService: TabService) {}

  type = ['File', 'Folder', 'Download', 'Upload'];

  @Output() addEvent = new  EventEmitter();
  @Output() showHidden = new EventEmitter<object>();
  @Output() backevent = new  EventEmitter();
  @Input()   isBackDisabled: boolean;
  @Input() loading: boolean;

  ngOnInit() {
  }

   sethidden($event) {
    const checked =  $event.checked;
    if ( checked === true) {
      this.showHidden.emit({isHidden: true});
    } else {
       this.showHidden.emit({isHidden: false});
    }
  }
  goBack() {
    this.backevent.emit();
  }

  add(type: string) {
          console.log(type);
         // this.addEvent.emit(type);
          const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: {type}
    });
          dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
  newTab() {
    this.tabService.addTabs(undefined);
  }
}




