import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageEditRoutingModule } from './manage-edit-routing.module';
import { ManageEditComponent } from './manage-edit.component';
import {MatTabsModule} from '@angular/material';
import {FileManagerModule} from './file-manager/file-manager.module';
import {FileEditorModule} from './file-editor/file-editor.module';


@NgModule({
  declarations: [ManageEditComponent],
  imports: [
    CommonModule,
    ManageEditRoutingModule,
    MatTabsModule,
    FileManagerModule,
    FileEditorModule,
  ]
})
export class ManageEditModule { }
