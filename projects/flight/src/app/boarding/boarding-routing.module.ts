import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepatureComponent } from './feature-departure/flight-departure/departure.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'departures',
        pathMatch: 'full'
      },
      {
        path: 'departures',
        component: DepatureComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardingRoutingModule { }
