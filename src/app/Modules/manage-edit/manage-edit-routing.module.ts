import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageEditComponent } from './manage-edit.component';

const routes: Routes = [{ path: '', component: ManageEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageEditRoutingModule { }
