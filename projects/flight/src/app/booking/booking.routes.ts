import { Routes } from "@angular/router";
import { provideEffects } from "@ngrx/effects";
import { provideState } from "@ngrx/store";
import { FlightBookingComponent, FlightEditComponent, FlightSearchComponent } from "./feature-flight";
import { TicketEffects } from "./logic-flight/+state/effects";
import { ticketFeature } from "./logic-flight/+state/reducer";
import { resolveFlight } from "./logic-flight/data-access/flight.resolver";
import { provideHttpClient, withInterceptors, withRequestsMadeViaParent } from "@angular/common/http";


export const BOOKING_ROUTES: Routes = [
  {
    path: '',
    component: FlightBookingComponent,
    providers: [
      provideState(ticketFeature),
      provideEffects([TicketEffects]),
      // provideHttpClient(
      //   withInterceptors([
      //     eventLogInterceptor
      //   ]),
      //   withRequestsMadeViaParent()
      // ),
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
            data: {
              name: 'Mary'
            },
            resolve: {
              flight: resolveFlight
            }
          }
        ]
      }
    ]
  }
];

export default BOOKING_ROUTES;
