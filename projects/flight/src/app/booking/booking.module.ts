import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BookingRoutingModule } from './booking-routing.module';
import { FlightBookingComponent, FlightEditComponent } from './feature-flight';
import { TicketEffects } from './logic-flight/+state/effects';
import { ticketFeature } from './logic-flight/+state/reducer';
import { UiFlightModule } from './ui-flight/ui-flight.module';


@NgModule({
  declarations: [
    FlightBookingComponent,
    FlightEditComponent,
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
