import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileEditorTabsComponent } from './file-editor-tabs.component';

const routes: Routes = [{ path: '', component: FileEditorTabsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileEditorTabsRoutingModule { }
