import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {MatCardModule, MatGridListModule, MatProgressSpinnerModule} from '@angular/material';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ]
})
export class DashboardModule { }
