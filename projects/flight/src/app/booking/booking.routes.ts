import { Routes } from '@angular/router';
import { FlightBookingComponent, FlightEditComponent, FlightSearchComponent } from './feature-flight';
import { FlightResolver } from './logic-flight';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TicketEffects } from './logic-flight/+state/effects';
import { ticketFeature } from './logic-flight/+state/reducer';
import { importProvidersFrom } from '@angular/core';


export const BOOKING_ROUTES: Routes = [
  {
    path: '',
    component: FlightBookingComponent,
    providers: [
      importProvidersFrom(
        StoreModule.forFeature(ticketFeature),
        EffectsModule.forFeature([TicketEffects])
      )
    ],
    children: [
      {
        path: '',
        redirectTo: 'flight',
        pathMatch: 'full'
      },
      {
        path: 'flight',
        children: [
          {
            path: '',
            redirectTo: 'search',
            pathMatch: 'full'
          },
          {
            path: 'search',
            component: FlightSearchComponent,
          },
          {
            path: 'edit/:id',
            component: FlightEditComponent,
            resolve: {
              flight: FlightResolver
            }
          }
        ]
      }
    ]
  }
];

export default BOOKING_ROUTES;
