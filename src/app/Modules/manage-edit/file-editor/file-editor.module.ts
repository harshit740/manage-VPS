import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileEditorRoutingModule } from './file-editor-routing.module';
import { FileEditorComponent } from './file-editor.component';


@NgModule({
  declarations: [FileEditorComponent],
  exports: [
    FileEditorComponent
  ],
  imports: [
    CommonModule,
    FileEditorRoutingModule
  ]
})
export class FileEditorModule { }
