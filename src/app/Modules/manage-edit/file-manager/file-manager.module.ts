import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileManagerRoutingModule } from './file-manager-routing.module';
import { FileManagerComponent } from './file-manager.component';
import { DemoMaterialModule } from 'src/app/material-module';
import {FilelistComponent} from '../../../Layouts/filemanager/filelist/filelist.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DialogBoxComponent } from './toolbar/dialog-box/dialog-box.component';
import {FormsModule} from '@angular/forms';
import {AppModule} from '../../../app.module';
import {FilelistMobileComponent} from '../../../Layouts/filemanager/filelist-mobile/filelist-mobile.component';

@NgModule({
  declarations: [FileManagerComponent, FilelistComponent, ToolbarComponent, DialogBoxComponent, FilelistMobileComponent],
  imports: [
    CommonModule,
    FileManagerRoutingModule,
    DemoMaterialModule,
    FormsModule,

  ],
  exports: [
    FileManagerComponent,

  ],
  entryComponents: [DialogBoxComponent]
})
export class FileManagerModule { }