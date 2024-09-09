import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BookingRoutingModule } from './booking-routing.module';
import { TicketEffects } from './logic-flight/+state/effects';
import { ticketFeature } from './logic-flight/+state/reducer';


@NgModule({
    imports: [
        BookingRoutingModule,
        StoreModule.forFeature(ticketFeature),
        EffectsModule.forFeature([TicketEffects]),
    ]
})
export class BookingModule { }
