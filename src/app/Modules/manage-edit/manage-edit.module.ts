import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageEditRoutingModule } from './manage-edit-routing.module';
import { ManageEditComponent } from './manage-edit.component';


@NgModule({
  declarations: [ManageEditComponent],
  imports: [
    CommonModule,
    ManageEditRoutingModule
  ]
})
export class ManageEditModule { }
