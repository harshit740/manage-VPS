import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileManagerComponent } from './file-manager.component';

const routes: Routes = [{ path: '', component: FileManagerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [
  ],
  exports: [RouterModule]
})
export class FileManagerRoutingModule { }
