import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParcelListComponent } from './components/parcel-list/parcel-list.component';
import { ParcelFormComponent } from './components/parcel-form/parcel-form.component';

const routes: Routes = [
  { path: '', component: ParcelListComponent },
  { path: 'add', component: ParcelFormComponent },
  { path: 'edit/:id', component: ParcelFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
