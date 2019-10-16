import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileManagerComponent } from './file-manager.component';
import {FilelistComponent} from '../../../Layouts/filemanager/filelist/filelist.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DialogBoxComponent } from './toolbar/dialog-box/dialog-box.component';
import {FormsModule} from '@angular/forms';
import {FilelistMobileComponent} from '../../../Layouts/filemanager/filelist-mobile/filelist-mobile.component';
import {
  _MatMenuDirectivesModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule, MatMenuModule, MatProgressBarModule, MatSortModule, MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  declarations: [FileManagerComponent, FilelistComponent, ToolbarComponent, DialogBoxComponent, FilelistMobileComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatTabsModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatProgressBarModule,
  ],
  exports: [
    FileManagerComponent,

  ],
  entryComponents: [DialogBoxComponent]
})
export class FileManagerModule { }
