import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { FlightFilterComponent } from './flight-filter/flight-filter.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FlightCardComponent,
    FlightFilterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    FlightCardComponent,
    FlightFilterComponent
  ]
})
export class UiFlightModule { }
