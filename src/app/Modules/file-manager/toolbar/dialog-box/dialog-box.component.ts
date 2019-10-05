import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
  name: string;
  type: '';
}

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, public dialogRef: MatDialogRef<DialogBoxComponent>) {}
  showError: boolean;
  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  save() {
    if (this.data.name === undefined) {
      this.showError = true;
    } else {
    this.dialogRef.close(this.data); }
  }
}
