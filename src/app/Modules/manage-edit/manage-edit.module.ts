import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageEditRoutingModule } from './manage-edit-routing.module';
import { ManageEditComponent } from './manage-edit.component';
import {MatTabsModule} from '@angular/material';
import {FileManagerModule} from './file-manager-tabs/file-manager/file-manager.module';
import {FileEditorModule} from './file-editor/file-editor.module';
import {FileEditorTabsModule} from './file-manager-tabs/file-editor-tabs.module';


@NgModule({
  declarations: [ManageEditComponent],
  imports: [
    CommonModule,
    ManageEditRoutingModule,
    MatTabsModule,
    FileManagerModule,
    FileEditorModule,
    FileEditorTabsModule
  ]
})
export class ManageEditModule { }
