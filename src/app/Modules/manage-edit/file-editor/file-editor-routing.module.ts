import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileEditorComponent } from './file-editor.component';

const routes: Routes = [{ path: '', component: FileEditorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileEditorRoutingModule { }
