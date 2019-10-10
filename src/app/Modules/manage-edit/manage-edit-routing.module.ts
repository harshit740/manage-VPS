import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageEditComponent } from './manage-edit.component';

const routes: Routes = [
  { path: '', component: ManageEditComponent },
  { path: 'files', loadChildren: () => import('./file-manager/file-manager.module').then(m => m.FileManagerModule) },
  { path: 'file-editor', loadChildren: () => import('./file-editor/file-editor.module').then(m => m.FileEditorModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageEditRoutingModule { }
