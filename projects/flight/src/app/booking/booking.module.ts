import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BookingRoutingModule } from './booking-routing.module';
import { TicketEffects } from './logic-flight/+state/effects';
import { ticketFeature } from './logic-flight/+state/reducer';
import { FlightBookingComponent, FlightEditComponent, FlightSearchComponent } from './feature-flight';
import { ReactiveFormsModule } from '@angular/forms';
import { UiFlightModule } from './ui-flight/ui-flight.module';


@NgModule({
  declarations: [
    FlightBookingComponent,
    FlightEditComponent,
    FlightSearchComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(ticketFeature),
    EffectsModule.forFeature([TicketEffects]),
    UiFlightModule
  ]
})
export class BookingModule { }
