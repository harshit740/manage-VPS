import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./Modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'manageedit', loadChildren: () => import('./Modules/manage-edit/manage-edit.module').then(m => m.ManageEditModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
