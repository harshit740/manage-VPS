import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogBoxComponent} from './dialog-box/dialog-box.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  type = ['File', 'Folder', 'Download', 'Upload'];

  @Output() addEvent = new  EventEmitter();
  @Output() showHidden = new EventEmitter<object>();
  @Output() backevent = new  EventEmitter();
  @Input()   isBackDisabled: boolean;

  ngOnInit() {
  }

  sethidden($event) {
    if ( $event.checked === true) {
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

}




