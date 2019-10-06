import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileEditorTabsRoutingModule } from './file-editor-tabs-routing.module';
import { FileEditorTabsComponent } from './file-editor-tabs.component';
import {MatTabsModule, MatToolbarModule} from '@angular/material';
import {FileManagerModule} from './file-manager/file-manager.module';


@NgModule({
  declarations: [FileEditorTabsComponent],
  exports: [
    FileEditorTabsComponent
  ],
  imports: [
    CommonModule,
    FileEditorTabsRoutingModule,
    MatTabsModule,
    FileManagerModule,
    MatToolbarModule
  ]
})
export class FileEditorTabsModule { }
