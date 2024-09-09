import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./shared/feature-core')
  },
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.routes')
  },
  {
    path: 'checkin',
    loadChildren: () => import('./checkin/checkin.module')
      .then(esm => esm.CheckinModule)
  },
  {
    path: 'boarding',
    loadChildren: () => import('./boarding/boarding.module')
      .then(esm => esm.BoardingModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
