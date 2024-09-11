import { inject } from "@angular/core"
import { Store } from "@ngrx/store"
import { ticketActions } from "./actions";
import { ticketFeature } from "./reducer";
import { FlightFilter } from "../model/flight-filter";
import { Flight } from "../model/flight";
import { BookingStore } from "./booking.store";


export function injectTicketsFacade() {
  const store = inject(BookingStore);

  return {
    flights: store.flights,
    setFlights: (flights: Flight[]) => store.setFlights(flights),
    search: (filter: FlightFilter) => {},
    update: (flight: Flight) => {},
    reset: () => {}
  };
}
